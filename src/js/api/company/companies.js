import { apiUrl, companyUrl } from "../constants";

/**
 * @description Get all companies
 * @returns {Promise<Object>} A promise that resolves to the JSON data returned by the API.
 * 
 */
export default function companies() {
    const url = apiUrl.toString() + companyUrl;
    
    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Something went wrong: Error ${response.status}`);
            }
            return response.json();
        });
}