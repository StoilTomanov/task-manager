import { endpoint } from "./endpoints.js";

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
}

export function register(userData) {
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
}

export function logout(userData) {
    const repsonse = await fetch(endpoint.logout, {
        method: 'post',
        headers: {
            'X-Parse-Application-Id': appID,
            'X-Parse-REST-API-Key': apiKey,
            'X-Parse-Session-Token': sessionStorage, // session token here
        },
        body: JSON.stringify(userData),
    });
}