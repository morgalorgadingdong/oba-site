import { Client, Environment } from "square";
import fs from "fs";
import "./index2.js";
const SQUARE_ACCESS_TOKEN = "EAAAEIHMfBOsMn8YdFwXlNvmCHrnJw0RqLVfXk0zCKIuzviJW1J3_LqPpsN3AqnX";
console.log("hooks.server.ts loaded");
const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set("cache-control", "max-age=3600");
  if (event.url.pathname.includes("webhookdev")) {
    let createJSONStoreItems = function() {
      const json = JSON.stringify(
        storeItems,
        (key, value) => typeof value === "bigint" ? value.toString() + "n" : value,
        2
      );
      fs.writeFile("src/routes/store-items.json", json, "utf8", function(err) {
        console.log("File written");
        if (err)
          throw err;
      });
      console.log("Updated JSON Store File");
    };
    console.log("webhook received");
    const client = new Client({
      accessToken: SQUARE_ACCESS_TOKEN,
      environment: Environment.Production
    });
    let storeItems;
    async function retrieveStoreItems() {
      try {
        const response2 = await client.catalogApi.searchCatalogItems({
          // customAttributeFilters: [
          //     {
          //     customAttributeDefinitionId: 'SOHE7MR2IVQ73GE3BUFWN44F',
          //     boolFilter: true
          //     }
          // ]
        });
        storeItems = response2.result.items;
        console.log(storeItems);
        console.log("Retrieved store items");
        retrieveStoreItemImgs();
      } catch (error) {
        console.log(error);
      }
    }
    async function retrieveStoreItemImgs() {
      let index = 0;
      let imgURL = [];
      for (const item of storeItems) {
        let ids = item.itemData.imageIds;
        if (ids.length == 1) {
          ids = String(ids);
          console.log(ids);
          try {
            const response2 = await client.catalogApi.retrieveCatalogObject(ids);
            imgURL.push(response2.result.object.imageData.url);
            console.log("Appended all img URLs");
          } catch (error) {
            console.log(error);
          }
        } else if (ids.length > 1) {
          for (let id of ids) {
            id = String(id);
            console.log(id);
            try {
              console.log(`attempting to retrieve image with id: ${id}`);
              const response2 = await client.catalogApi.retrieveCatalogObject(id);
              imgURL.push(response2.result.object.imageData.url);
              console.log("Appended all img URLs");
            } catch (error) {
              console.log(error);
            }
          }
        }
        storeItems[index].itemData.imgURL = imgURL;
        index++;
      }
      createJSONStoreItems();
    }
    retrieveStoreItems();
    return new Response("Updated store catelog", {
      status: 200,
      headers: {
        "content-type": "text/plain"
      }
    });
  }
  return response;
};
export {
  handle
};
