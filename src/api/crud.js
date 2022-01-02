import { endpoint } from "./endpoints.js";
import { clearUserData, setUserData } from "./storage.js";

const appID = 'ojCxQpaTc8ay4TdoBxRNrrdkBpAANgEGFjJjKVia';
const apiKey = '71aS9FE1hAsE9bN526INsJhpRbwKjBxxI5fX7p68';
const contentType = 'application/json';

export async function login(userData) {
    const repsonse = await fetch(endpoint.login, {
        method: 'post',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Revocable-Session': 1,
        },
        body: JSON.stringify(userData),
    });
    const result = await repsonse.json();
    setUserData(result.username, result.sessionToken, result.objectId);
}

export async function register(userData) {
    const repsonse = await fetch(endpoint.register, {
        method: 'post',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Revocable-Session': 1,
            'Content-Type': contentType,
        },
        body: JSON.stringify(userData),
    });
    const result = await repsonse.json();
    setUserData(userData.username, result.sessionToken, result.objectId);
}

export async function logout(userData) {
    const repsonse = await fetch(endpoint.logout, {
        method: 'post',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Session-Token': sessionStorage.sessionToken,
        },
        body: JSON.stringify(userData),
    });
    clearUserData();
}

export async function deleteUser(userData) {
    const repsonse = await fetch(endpoint.delete, {
        method: 'delete',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Session-Token': sessionStorage.sessionToken,
        },
    });
    // clearUserData();

    //TODO: overwerite expiresAt session value ( currently expires afte 1 year )
}