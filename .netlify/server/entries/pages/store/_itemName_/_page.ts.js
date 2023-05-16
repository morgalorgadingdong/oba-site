const load = ({ params }) => {
  console.log("page reload", params);
  return {
    itemName: params.itemName
  };
};
const prerender = true;
export {
  load,
  prerender
};
