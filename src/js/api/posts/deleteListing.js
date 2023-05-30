// Author: Margrethe By
// Team: Enigma Bullet

const token = localStorage.getItem("accessToken");

/**
 * Sends a delete request to the API based on the url paramter.
 * @param { string } url 
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