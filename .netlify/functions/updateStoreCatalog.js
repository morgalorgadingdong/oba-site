const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
import { Client, Environment, ApiError } from 'square';
import fs from 'fs';
import path from 'path';

console.log('loading netlify/functions/webhooks.js')

const client = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: Environment.Production,
});
let storeItems

exports.handler = async function(event, context) {    
    
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
        console.log(storeItems)
        console.log('Retrieved store items');
        
        // Temporarily disabling this step to test JSON file creation
        // retrieveStoreItemImgs()
        createJSONStoreItems()
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
            createJSONStoreItems()
        }
        
        function createJSONStoreItems() {
            console.log('Creating JSON Store File')
            //BigInt workaround
            const json = JSON.stringify(storeItems, (key, value) =>
                typeof value === "bigint" ? value.toString() + "n" : value
                , 2);
            const filePath = path.join(__dirname, '..', '..', 'src', 'routes', 'store-items.json');
            // console.log(json)
                fs.writeFile(filePath, json, 'utf8', function(err) {
                    console.log('File written')
                    if (err) throw err;
            });
            console.log('Updated JSON Store File')
            
            

        }
        
        
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



// async function retrieveStoreItems() {
// retrieveStoreItems()