// Author: Margrethe By
// Team: Enigma Bullet

const token = localStorage.getItem("token");

/**
 * Sends a delete request to the API based on the url parameter.
 * @param { string } url to target the listing that is going to be deleted.
 */
export async function deleteItem(url) {
    try {
        const itemData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify()
        }
        const response = await fetch(url, itemData);
        const result = await response.json();

    } catch (error) {
        console.log(error);
    }
} 