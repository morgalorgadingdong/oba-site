// const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
import { Client, Environment, ApiError } from 'square';
import fs from 'fs';
import path from 'path';
import { doc, setDoc, writeBatch } from "firebase/firestore";
import { db } from "$lib/firebase";
import { SQUARE_ACCESS_TOKEN } from '$env/static/private';

const client = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: Environment.Production,
});



export const load = async function(event, context) {    
    let storeItems: any;
    let priceS: string;
    let price: number;
    try {
        const response = await client.catalogApi.searchCatalogItems({
        // customAttributeFilters: [
        //     {
        //     customAttributeDefinitionId: 'SOHE7MR2IVQ73GE3BUFWN44F',
        //     boolFilter: true
        //     }
        // ]
        });
        
        storeItems = response.result.items;
        priceS = storeItems[0].itemData.variations[0].itemVariationData.priceMoney.amount
        priceS = String(priceS)
        // priceS = priceS.slice(0, priceS.length - 1)
        price = Number(priceS)
        price = price/100
        console.log('Retrieved store items');
        
        // Temporarily disabling this step to test JSON file creation
        retrieveStoreItemImgs()
        // createJSONStoreItems()
        async function retrieveStoreItemImgs() {    
            let index = 0;
            let imgURL = []
            //IN SERIES
            for (const item of storeItems) {
                let ids = item.itemData.imageIds
                
                if (ids.length == 1) {
                    console.log('Single image ID found')
                    ids = String(ids)
                    console.log(ids)
                    try {
                        console.log(`attempting to retrieve image with id: ${id}`);
                        const response = await client.catalogApi.retrieveCatalogObject(ids);
                        imgURL.push(response.result.object.imageData.url) 
                        console.log('Appended all img URLs')
                    } catch(error) {
                    console.log(error);
                    }
                } else if (ids.length > 1) {
                    console.log('Multiple image IDs found')
                    for (let id of ids) {
                        id = String(id);
                        console.log(id);
                        try {
                            console.log(`attempting to retrieve image with id: ${id}`);
                            const response = await client.catalogApi.retrieveCatalogObject(id);
                            console.log('Retrieved image')
                            imgURL.push(response.result.object.imageData.url);
                            
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    console.log('Appended all img URLs');
                }
                storeItems[index].itemData.imgURL = imgURL
                index++
            }
            updateDB(storeItems)
        }
        
        async function updateDB(storeItems) {
            console.log('Updating DB')
            
            

            for (const item of storeItems) {
                await setStoreItemToDB(item);
            }
            console.log('DB updated')
        }
        async function setStoreItemToDB(item) {
            console.log(item)
            const docRef = doc(db, "store", item.id);
            const docData = item

            // let price = item.itemData.variations[0].itemVariationData.priceMoney.amount
            
            console.log( 'price: ' + price)
            await setDoc(docRef, {
                name: item.itemData.name,
                description: item.itemData.description,
                descriptionHTML: item.itemData.descriptionHtml,
                price: price,
                imgURL: item.itemData.imgURL
            });
        }

            
            
            
                // storeItems.forEach(item => {
                // console.log(item)
                // const docRef = doc(db, "store-items", item.id);
                // setDoc(docRef, item.itemData);

                // async function addStoreItemToDB(item) {
                //     console.log(item)    
                //     const docRef = doc(db, "store", "store-items", item.id);
                //     await setDoc(docRef, item.itemData);
                // }

            // const db = doc(db, 'store', 'store-items');
            // const batch = writeBatch(db);
            // batch.set(db, {storeItems: storeItems});
            // batch.commit().then(() => {
            //     console.log('DB updated')
            // }).catch((error) => {
            //     console.log(error)
            // })
        


        // function createJSONStoreItems() {
        //     console.log('Creating JSON Store File')
        //     //BigInt workaround
        //     const json = JSON.stringify(storeItems, (key, value) =>
        //         typeof value === "bigint" ? value.toString() + "n" : value
        //         , 2);
        //     console.log(__dirname)
        //     let filePath
        //     if (process.env.NETLIFY === 'true') {
        //         filePath = path.join(__dirname, 'store-items.json');
        //     } else {
        //         filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'functions', 'store-items.json');
        //     }
        //     // console.log(json)
        //     console.log(filePath)
        //     fs.writeFile(filePath, json, 'utf8', function(err) {
        //         console.log('File written')
        //         if (err) throw err;
        //     });
        //     console.log('Updated JSON Store File')
            
            

        // }
        
        
    } catch(error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" }),
          };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Online store updated" }),
    };
    }
