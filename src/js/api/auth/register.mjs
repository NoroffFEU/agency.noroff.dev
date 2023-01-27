import { apiUrl } from "../constants.mjs";


const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = apiUrl + action;

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json();
    location.href = `login.html`;
    return result;
}