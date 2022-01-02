import { endpoint } from "./endpoints.js";
import { clearUserData, setUserData } from "./storage.js";

const appID = 'ojCxQpaTc8ay4TdoBxRNrrdkBpAANgEGFjJjKVia';
const apiKey = '71aS9FE1hAsE9bN526INsJhpRbwKjBxxI5fX7p68';
const contentType = 'application/json';

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
        if (response.ok != true) {
            alert(response.error);
            throw new Error(response.error);
        }
        const result = await response.json();
        console.log(result);
        setUserData(result.username, result.sessionToken, result.objectId);
    } catch (err) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

}

export async function register(userData) {
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
    const result = await response.json();
    setUserData(userData.username, result.sessionToken, result.objectId);
    console.log(result);
}

export async function logout() {
    try {
        const repsonse = await fetch(endpoint.logout, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': appID,
                'X-Parse-REST-API-Key': apiKey,
                'X-Parse-Session-Token': sessionStorage.sessionToken,
            },
        });
        if (repsonse.ok != true) {
            alert(repsonse.error);
            throw new Error(repsonse.error);
        }
        const result = await repsonse.json();
        clearUserData();
        console.log(result);
    } catch (err) {
        const error = await repsonse.json();
        alert(error.message);
        throw new Error(error.message);
    }
}

export async function deleteUser() {
    const repsonse = await fetch(endpoint.delete, {
        method: 'delete',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Session-Token': sessionStorage.sessionToken,
        },
    });
    clearUserData();
    const result = await repsonse.json();
    console.log(result);
}