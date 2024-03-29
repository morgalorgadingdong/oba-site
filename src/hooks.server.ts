import { SQUARE_ACCESS_TOKEN_SANDBOX } from '$env/static/private';
import { SQUARE_ACCESS_TOKEN } from '$env/static/private';
import { Client, Environment, ApiError } from 'square';
import fs from 'fs';
// console.log(SQUARE_ACCESS_TOKEN_SANDBOX);

console.log('hooks.server.ts loaded')

import type { Handle } from '@sveltejs/kit';
import { construct_svelte_component_dev } from 'svelte/internal';
 
export const handle = (async ({ event, resolve }) => {
    const response = await resolve(event);
 
    // Add a cache-control header to all the responses
    response.headers.set('cache-control', 'max-age=3600');
    

    // On routes that start with /testing, return a different response
    if (event.url.pathname.includes('webhookdev')) {
        console.log('webhook received')
        const client = new Client({
            accessToken: SQUARE_ACCESS_TOKEN,
            environment: Environment.Production,
        });
        let storeItems
        async function retrieveStoreItems() {
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
                retrieveStoreItemImgs()
            } catch(error) {
                console.log(error);
            }
        }

        async function retrieveStoreItemImgs() {    
            let index = 0;
            let imgURL = []
            //IN SERIES
            for (const item of storeItems) {
                let ids = item.itemData.imageIds
                
                if (ids.length == 1) {
                    ids = String(ids)
                    console.log(ids)
                    try {
                        const response = await client.catalogApi.retrieveCatalogObject(ids);
                        imgURL.push(response.result.object.imageData.url) 
                        console.log('Appended all img URLs')
                    } catch(error) {
                    console.log(error);
                    }
                } else if (ids.length > 1) {
                    for (let id of ids) {
                        id = String(id);
                        console.log(id);
                        try {
                            console.log(`attempting to retrieve image with id: ${id}`);
                            const response = await client.catalogApi.retrieveCatalogObject(id);
                            imgURL.push(response.result.object.imageData.url);
                            console.log('Appended all img URLs');
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
                storeItems[index].itemData.imgURL = imgURL
                index++
            }
            
            
            createJSONStoreItems()
        }

        function createJSONStoreItems() {
            //BigInt workaround
            const json = JSON.stringify(storeItems, (key, value) =>
                typeof value === "bigint" ? value.toString() + "n" : value
                , 2);
            // console.log(json)
                fs.writeFile('src/routes/store-items.json', json, 'utf8', function(err) {
                    console.log('File written')
                    if (err) throw err;
            });
            console.log('Updated JSON Store File')
        }

        retrieveStoreItems()
        
        return new Response('Updated store catelog', {
            status: 200,
            headers: {
                'content-type': 'text/plain'
            }
        });
    }
 
    return response;
}) satisfies Handle;



