import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
import { Client, Environment, ApiError } from 'square';
import fs from 'fs';
import path from 'path';
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "$lib/firebase";

const client = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: Environment.Production,
});


export const load = async function(event, context) {    
    
}



export const GET: RequestHandler = async ({ request }) => {
    let storeItems
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
            updateDB()
        }
        async function updateDB() {
            console.log('Updating DB')
            
            storeItems.forEach(item => {
                async function addStoreItemToDB(item) {
                    const docRef = doc(db, "store", "store-items", item.id);
                    await setDoc(docRef, item);
            })
            // const db = doc(db, 'store', 'store-items');
            // const batch = writeBatch(db);
            // batch.set(db, {storeItems: storeItems});
            // batch.commit().then(() => {
            //     console.log('DB updated')
            // }).catch((error) => {
            //     console.log(error)
            // })
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