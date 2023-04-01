const csr = true;
const load = ({ params }) => {
  console.log("page reload", params);
  return {
    tourName: params.tourName
  };
};
const prerender = false;
export {
  csr,
  load,
  prerender
};
