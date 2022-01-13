import { endpoint } from "./endpoints.js";
import { clearUserData, setUserData } from "./storage.js";

export const appID = 'ojCxQpaTc8ay4TdoBxRNrrdkBpAANgEGFjJjKVia';
export const apiKey = '71aS9FE1hAsE9bN526INsJhpRbwKjBxxI5fX7p68';
export const contentType = 'application/json';

export async function login(userData) {
    try {
        const response = await fetch(endpoint.login, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'X-Parse-Revocable-Session': 1,
            },
            body: JSON.stringify(userData),
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
        const result = await response.json();
        setUserData(result.username, result.sessionToken, result.objectId, userData['isTeam'], result.organization, result.teamId);
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }

}

export async function register(userData) {
    try {
        const response = await fetch(endpoint.register, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'X-Parse-Revocable-Session': 1,
                'Content-Type': contentType,
            },
            body: JSON.stringify(userData),
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
        const result = await response.json();
        setUserData(userData.username, result.sessionToken, result.objectId, userData['isTeam'], result.organization, result.teamId);
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

export async function logout() {
    try {
        const response = await fetch(endpoint.logout, {
            method: 'post',
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
        const result = await response.json();
        clearUserData();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

export async function deleteUser() {
    try {
        const response = await fetch(endpoint.users + sessionStorage.objectId, {
            method: 'delete',
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
        clearUserData();
        const result = await response.json();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

export async function updateUser(userData) {
    try {
        const response = await fetch(endpoint.users + sessionStorage.objectId, {
            method: 'put',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'X-Parse-Session-Token': sessionStorage.sessionToken,
                'Content-Type': contentType,
            },
            body: JSON.stringify(userData),
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
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

export async function retrieveCurrentUser() {
    try {
        const response = await fetch(endpoint.users + sessionStorage.objectId, {
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

export async function getAllUsers() {

    const query = {
        "$or": [{
            "organization": sessionStorage.organization
        }, ],
        "isTeam": false,
    }

    try {
        const response = await fetch(endpoint.userQuery + `${encodeURI(JSON.stringify(query))}`, {
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