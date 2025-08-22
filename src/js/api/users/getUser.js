import { apiPath } from '../../api/constants.js';
import { headers } from '../../api/headers.js';

export async function getUser(id) {

    const userUrl = apiPath + `users/` + id;


    const reqOption = {
        method: 'GET',
        headers: headers(),
    };
    const response = await fetch(userUrl, reqOption);

    if (!response.ok) {
        throw new Error(`Feiled to fetch user: ${response.status} ${response.statusText}`)
    }
    const data = await response.json();
    return data;

}