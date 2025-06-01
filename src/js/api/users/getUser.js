import { apiPath } from '../../api/constants.js';
import { headers } from '../../api/headers.js';

export async function getUser(id) {

    const userUrl = apiPath + `users/` + id;


    const reqOption = {
        method: 'GET',
        headers: headers(),
    };
    const response = await fetch(userUrl, reqOption);
    const data = await response.json();
    return data;

}