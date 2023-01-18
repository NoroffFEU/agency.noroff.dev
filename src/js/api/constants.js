export const apiUrl = new URL("https://api.noroff.dev/api/v1/");
export const apiPath = apiUrl.toString()


/* This section is for Dummy API that is for testing purpose and development
   it`s a well documented dummy API so make sure to read the docs for it.
   All endpoints below are dummy endpoints */

export const dummyApiLogin = "https://dummyjson.com/auth/login"; // Dummy Login
export const dummyApiGetAll = "https://dummyjson.com/posts"; // GET all posts
export const dummyApiGetSingel = "https://dummyjson.com/posts/1"//GET a singel post
export const dummyApiSearch = "https://dummyjson.com/posts/search?q=love";// Search for a word in post
export const dummyApiCreatePost = "https://dummyjson.com/posts/add";//create a post
export const dummyAPiUpddatePost = "https://dummyjson.com/posts/1"; //Update a post
export const dummyApiDeletePost = "https://dummyjson.com/posts/1";//Delete a post
export const dummyApiGetPostByID = "https://dummyjson.com/posts/user/"//This needs a id of a user from query

// Limit resources to be viewed 
export const dummyApiLimitResources = "https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3";//Url with limit