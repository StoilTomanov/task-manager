import { apiKey, appID, contentType } from "./crud.js";
import { endpoint } from "./endpoints.js";

export async function createTask(data) {
    try {
        const response = await fetch(endpoint.create, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'Content-Type': contentType,
            },
            body: JSON.stringify(data),
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

export async function getAllTasks() { // use JSONArray as the below one have an AND operator in the query
    const query = {
        "status": {
            "$nin": [
                "Completed",
                "Unassigned",
            ]
        },
        "taskIdentifier": sessionStorage.teamId, // Check if this works - cannot use an [object Object]
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
        "$or": [{
            "taskIdentifier": sessionStorage.teamId, // Check if this works - cannot use an [object Object]
        }],
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

export async function getUnassignedTasks() {
    const query = {
        "status": "Unassigned",
        "$or": [{
            "taskIdentifier": sessionStorage.teamId, // Check if this works - cannot use an [object Object]
        }],
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

export async function updateTask(data, taskId) {

    try {
        const response = await fetch(endpoint.update + taskId, {
            method: 'put',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'Content-Type': contentType,
            },
            body: JSON.stringify(data),
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
        // return response.json();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}
export async function deleteTask(taskId) {

    try {
        const response = await fetch(endpoint.deleteTask + taskId, {
            method: 'delete',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
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
        // return response.json();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}