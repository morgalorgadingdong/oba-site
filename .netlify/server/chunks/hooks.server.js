import "fs";
import "./index2.js";
const SQUARE_ACCESS_TOKEN_SANDBOX = "EAAAEFGCqdV8Nx-7p0MnkLNhTZZ7x9wmwqzWoHtKJ3SfDFOjcnUyQieFoMYgNnQJ";
console.log(SQUARE_ACCESS_TOKEN_SANDBOX);
const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set("cache-control", "max-age=3600");
  return response;
};
export {
  handle
};
