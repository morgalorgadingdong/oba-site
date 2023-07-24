import { Client, Environment, ApiError } from 'square';
import { doc, setDoc, getDocs, deleteDoc, collection } from "firebase/firestore";
import { db } from "$lib/firebase";
import { SQUARE_ACCESS_TOKEN } from '$env/static/private';

const client = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: Environment.Production,
});

function StoreItem(name, id, description, descriptionHTML, price, imgIds, imgURL, variations) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.descriptionHTML = descriptionHTML;
    this.price = price;
    this.imgIds = imgIds, 
    this.imgURL = imgURL;
    this.variations = variations;
  }




export const POST: RequestHandler = async ({ request }) => {
        let storeItems: any;
        let priceS: string;
        let price: number;
        let variations: any[] = [];
        let squareItemIds = [];
        try {
            const response = await client.catalogApi.searchCatalogItems({});
            storeItems = response.result.items;
            
            //Note for future self, this code assumes all variations of item are priced the same
            for (let i = 0; i < storeItems.length; i++) {
                priceS = storeItems[i].itemData.variations[0].itemVariationData.priceMoney.amount
                priceS = String(priceS)
                // priceS = priceS.slice(0, priceS.length - 1)
                price = Number(priceS)
                price = price/100
                storeItems[i].itemData.variations.forEach(variation => {
                    // console.log(variation)
                    variations.push(variation.itemVariationData.name)
                })
                // console.log(variations)
                console.log('Retrieved store item', storeItems[i].itemData.name);
                let currentItem = new StoreItem(
                    storeItems[i].itemData.name, 
                    storeItems[i].id, 
                    storeItems[i].itemData.description, 
                    storeItems[i].itemData.descriptionHtml, 
                    price, 
                    storeItems[i].itemData.imageIds,
                    [], 
                    variations
                )
                squareItemIds.push(storeItems[i].id);
    
                try {
                    await retrieveStoreItemImgs(currentItem)
                    await setStoreItemToDB(currentItem)
                    await deleteNonExistentItems(squareItemIds);
                } catch (error) {
                    console.log(error)
                }
        
                
            
            }
                
            // console.log(storeItems)
            
            async function retrieveStoreItemImgs(currentItem) {    
                return new Promise(async (resolve, reject) => {
                    let ids = currentItem.imgIds;
                    let imgURL = [];
                    try {
                      if (ids.length === 1) {
                        console.log('Single image ID found', currentItem.name);
                        ids = String(ids);
                        console.log(`attempting to retrieve image with id: ${ids}`);
                        const response = await client.catalogApi.retrieveCatalogObject(ids);
                        imgURL.push(response.result.object.imageData.url);
                        currentItem.imgURL = imgURL;
                        console.log('Appended all img URLs');
                      } else if (ids.length > 1) {
                        console.log('Multiple image IDs found');
                        for (let id of ids) {
                          id = String(id);
                          console.log(`attempting to retrieve image with id: ${id}`);
                          const response = await client.catalogApi.retrieveCatalogObject(id);
                          console.log('Retrieved image');
                          imgURL.push(response.result.object.imageData.url);
                          currentItem.imgURL = imgURL;
                        }
                        console.log('Appended all img URLs');
                      }
                      resolve(currentItem); // Resolve the promise with the currentItem
                    } catch (error) {
                      console.log(error);
                      reject(error);
                    }
                  });
                
            }
    
            async function setStoreItemToDB(currentItem) {
                // console.log(currentItem)
                const docRef = doc(db, "store", currentItem.name);
                const docData = currentItem
    
                // let price = item.itemData.variations[0].itemVariationData.priceMoney.amount
                
                // console.log( 'price: ' + price)
                await setDoc(docRef, {
                    name: currentItem.name,
                    id: currentItem.id,
                    description: currentItem.description,
                    descriptionHTML: currentItem.descriptionHTML,
                    price: currentItem.price,
                    imgIds: currentItem.imgIds, 
                    imgURL: currentItem.imgURL,
                    variations: currentItem.variations
                });
            }
    
            async function deleteNonExistentItems(squareItemIds) {
                // Get all documents from the store collection
                const querySnapshot = await getDocs(collection(db, 'store'));
            
                // Loop through each document
                querySnapshot.forEach(async (doc) => {
                    // If the document's id is not found in the squareItemIds array, delete the document
                    if (!squareItemIds.includes(doc.data().id)) {
                        await deleteDoc(doc.ref);
                    }
                });
            }
    
            } catch(error) {
                console.log(error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: "Internal server error" }),
                };
            }
            return new Response(
                JSON.stringify({ message: "Successfully retrieved store items" }),
                {
                    status: 200,
                    headers: {
                        "content-type": "application/json;charset=UTF-8",
                    },
                }
            );
        }


export const GET: RequestHandler = async ({ request }) => {
    let storeItems: any;
    let priceS: string;
    let price: number;
    let variations: any[] = [];
    let squareItemIds = [];
    try {
        const response = await client.catalogApi.searchCatalogItems({});
        storeItems = response.result.items;
        
        //Note for future self, this code assumes all variations of item are priced the same
        for (let i = 0; i < storeItems.length; i++) {
            priceS = storeItems[i].itemData.variations[0].itemVariationData.priceMoney.amount
            priceS = String(priceS)
            // priceS = priceS.slice(0, priceS.length - 1)
            price = Number(priceS)
            price = price/100
            storeItems[i].itemData.variations.forEach(variation => {
                // console.log(variation)
                variations.push(variation.itemVariationData.name)
            })
            // console.log(variations)
            console.log('Retrieved store item', storeItems[i].itemData.name);
            let currentItem = new StoreItem(
                storeItems[i].itemData.name, 
                storeItems[i].id, 
                storeItems[i].itemData.description, 
                storeItems[i].itemData.descriptionHtml, 
                price, 
                storeItems[i].itemData.imageIds,
                [], 
                variations
            )
            squareItemIds.push(storeItems[i].id);

            try {
                await retrieveStoreItemImgs(currentItem)
                await setStoreItemToDB(currentItem)
                await deleteNonExistentItems(squareItemIds);
            } catch (error) {
                console.log(error)
            }
    
            
        
        }
            
        // console.log(storeItems)
        
        async function retrieveStoreItemImgs(currentItem) {    
            return new Promise(async (resolve, reject) => {
                let ids = currentItem.imgIds;
                let imgURL = [];
                try {
                    if (ids.length === 1) {
                    console.log('Single image ID found', currentItem.name);
                    ids = String(ids);
                    console.log(`attempting to retrieve image with id: ${ids}`);
                    const response = await client.catalogApi.retrieveCatalogObject(ids);
                    imgURL.push(response.result.object.imageData.url);
                    currentItem.imgURL = imgURL;
                    console.log('Appended all img URLs');
                    } else if (ids.length > 1) {
                    console.log('Multiple image IDs found');
                    for (let id of ids) {
                        id = String(id);
                        console.log(`attempting to retrieve image with id: ${id}`);
                        const response = await client.catalogApi.retrieveCatalogObject(id);
                        console.log('Retrieved image');
                        imgURL.push(response.result.object.imageData.url);
                        currentItem.imgURL = imgURL;
                    }
                    console.log('Appended all img URLs');
                    }
                    resolve(currentItem); // Resolve the promise with the currentItem
                } catch (error) {
                    console.log(error);
                    reject(error);
                }
                });
            
        }

        async function setStoreItemToDB(currentItem) {
            // console.log(currentItem)
            const docRef = doc(db, "store", currentItem.name);
            const docData = currentItem

            // let price = item.itemData.variations[0].itemVariationData.priceMoney.amount
            
            // console.log( 'price: ' + price)
            await setDoc(docRef, {
                name: currentItem.name,
                id: currentItem.id,
                description: currentItem.description,
                descriptionHTML: currentItem.descriptionHTML,
                price: currentItem.price,
                imgIds: currentItem.imgIds, 
                imgURL: currentItem.imgURL,
                variations: currentItem.variations
            });
        }

        async function deleteNonExistentItems(squareItemIds) {
            // Get all documents from the store collection
            const querySnapshot = await getDocs(collection(db, 'store'));
        
            // Loop through each document
            querySnapshot.forEach(async (doc) => {
                // If the document's id is not found in the squareItemIds array, delete the document
                if (!squareItemIds.includes(doc.data().id)) {
                    await deleteDoc(doc.ref);
                }
            });
        }

        } catch(error) {
            console.log(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Internal server error" }),
            };
        }
        return new Response(
            JSON.stringify({ message: "Successfully retrieved store items" }),
            {
                status: 200,
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
            }
        );
    }

// export const POST: RequestHandler = async ({ request, cookies }) => {

//     const { idToken } = await request.json();

//     const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

//     const decodedIdToken = await adminAuth.verifyIdToken(idToken);

//     if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
//         const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
//         const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };

//         cookies.set('__session', cookie, options);

//         return json({ status: 'signedIn' });
//     } else {
//         throw error(401, 'Recent sign in required!');
//     }


// };

// export const DELETE: RequestHandler = async ({ cookies }) => {
//     cookies.delete('__session', { path: '/' });
//     return json({ status: 'signedOut' });
// }