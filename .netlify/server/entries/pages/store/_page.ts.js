import "../../../chunks/index3.js";
import { getDocs, collection } from "firebase/firestore";
import { d as db } from "../../../chunks/firebase.js";
const load = async () => {
  const storeItems = await getDocs(collection(db, "store"));
  const storeItemsArray = storeItems.docs.map((doc) => doc.data());
  return {
    storeItems: storeItemsArray
  };
};
const prerender = true;
export {
  load,
  prerender
};
