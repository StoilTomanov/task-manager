import { apiKey, appID } from "./crud.js";
import { endpoint } from "./endpoints.js";

export async function getAllTasks() {
    try {
        const response = await fetch(endpoint.getAllTasks, {
            method: 'get',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'X-Parse-Session-Token': sessionStorage.sessionToken,
            },
        });

        if (response.status == 400) {
            const result = await response.json();
            alert(result.error);
            throw new Error(result.error);
        }
        if (response.ok != true) {
            const result = await response.json();
            alert(result.error);
            throw new Error(result.error);
        }
        return response.json();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}