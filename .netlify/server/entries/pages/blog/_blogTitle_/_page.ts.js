const load = ({ params }) => {
  console.log("page reload", params);
  return {
    blogTitle: params.blogTitle
  };
};
const prerender = true;
export {
  load,
  prerender
};
