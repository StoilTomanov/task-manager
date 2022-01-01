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
            'Content-Type': contentType,
        }
    });

}

// export function register(userData) {

// }

// export function logout(userData) {

// }