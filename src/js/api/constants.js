export const API_URL = new URL('https://agency-api.noroff.dev/');
export const API_Path = API_URL.toString();

export const API_RegisterUser = 'users'; // Register a new user
export const API_LoginUser = 'users/login'; // User login

export const API_Listings = 'listings'; // Create a listing(POST) || Get all listings(GET).
export const API_ListingID = 'listings/'; // Update, Delete or fetch a single listing. This needs an ID (example: listings/{id})
// If listing is owned by user's company offers and applications will be returned with a valid header token.

export const API_Applications = 'application'; // Get all applications
export const API_ApplicationID = 'application/'; // Update, Delete or get a single application. This needs an ID (example: application/{id})
export const API_ApplicationQueryParams = '?applicant=true&listing=true&offers=true'; // QueryParams for applications

export const API_Company = 'company'; // Create a new company(POST) || Get all companies(GET)
export const API_CompanyAdmin = 'company/admin/'; // Add or remove an admin from the company. This needs an ID (example: company/admin/{id})
export const API_CompanyID = 'company/'; // Update, Delete or get a single company, offers and applicaions provided with correct authorization from company admin.
// This needs an ID (example: company/{id})

export const API_Offer = 'offer/'; // Delete an offer. This needs an ID (example: offer/{id})

export const API_Users = 'users'; // Get all users
export const API_UsersID = 'users/'; // Update, Delete or get a single user. This needs an ID (example: users/{id})

/* This section is for Dummy API that is for testing purpose and development
   it`s a well documented dummy API so make sure to read the docs for it.
   All endpoints below are dummy endpoints
   Docs for dummy API can be found here https://dummyjson.com/docs 
*/

export const dummyApiUrl = 'https://dummyjson.com/'; // Base url

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
