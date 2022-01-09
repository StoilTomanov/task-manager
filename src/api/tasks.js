import { apiKey, appID } from "./crud.js";
import { endpoint } from "./endpoints.js";

export async function getAllTasks() {
    const query = {
        "status": {
            "$ne": "Completed"
        }
    }

    try {
        const response = await fetch(endpoint.tasksData + `${encodeURI(JSON.stringify(query))}`, {
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

export async function getCompletedTasks() {
    const query = {
        "status": "Completed",
    }

    try {
        const response = await fetch(endpoint.tasksData + `${encodeURI(JSON.stringify(query))}`, {
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