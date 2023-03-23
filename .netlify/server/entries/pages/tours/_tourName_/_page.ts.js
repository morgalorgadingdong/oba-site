const load = ({ params }) => {
  console.log("page reload", params);
  return {
    tourName: params.tourName
  };
};
const prerender = true;
export {
  load,
  prerender
};
