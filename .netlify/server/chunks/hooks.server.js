import { Client, Environment } from "square";
import fs from "fs";
const SQUARE_ACCESS_TOKEN = "EAAAEIHMfBOsMn8YdFwXlNvmCHrnJw0RqLVfXk0zCKIuzviJW1J3_LqPpsN3AqnX";
const SQUARE_ACCESS_TOKEN_SANDBOX = "EAAAEFGCqdV8Nx-7p0MnkLNhTZZ7x9wmwqzWoHtKJ3SfDFOjcnUyQieFoMYgNnQJ";
console.log(SQUARE_ACCESS_TOKEN_SANDBOX);
const client = new Client({
  accessToken: SQUARE_ACCESS_TOKEN,
  environment: Environment.Production
});
let storeItems;
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
        const response = await client.catalogApi.retrieveCatalogObject(ids);
        imgURL.push(response.result.object.imageData.url);
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
          const response = await client.catalogApi.retrieveCatalogObject(id);
          imgURL.push(response.result.object.imageData.url);
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
function createJSONStoreItems() {
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
}
retrieveStoreItems();