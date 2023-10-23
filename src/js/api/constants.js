export const apiUrl = new URL('https://cors.noroff.dev/https://agency-api.noroff.dev/');
export const apiPath = apiUrl.toString();

/* This section is for Dummy API that is for testing purpose and development
   it`s a well documented dummy API so make sure to read the docs for it.
   All endpoints below are dummy endpoints
   Docs for dummy API can be found here https://dummyjson.com/docs 
*/

//export const dummyApiUrl = 'https://dummyjson.com/'; // Base url

export const dummyApiRegisterUser = 'users/add'; // It will simulate a POST request and will return the new created user with a new id
export const dummyApiLogin = 'auth/login'; // user Login
export const dummyApiGetAll = 'posts'; // GET all posts
export const dummyApiGetSingel = 'posts/1'; //GET a singel post
export const dummyApiSearch = 'posts/search?q=love'; // Search for a word in post
export const dummyApiCreatePost = 'posts/add'; //create a post
export const dummyAPiUpddatePost = 'posts/1'; //Update a post
export const dummyApiDeletePost = 'posts/1'; //Delete a post
export const dummyApiGetPostByID = 'posts/user/'; //This needs a id of a user from query
export const dummyApiCreateProduct = 'products/add'; //create a product

// Limit resources to be viewed
export const dummyApiLimitResources = 'RESOURCE/?limit=10&skip=5&select=key1,key2,key3'; //Url with limit
