export function setUserData(username, sessionToken, objectId) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('sessionToken', sessionToken);
    sessionStorage.setItem('objectId', objectId);
}

export function getUserData() {
    return {
        username: sessionStorage.username,
        sessionToken: sessionStorage.sessionStorage,
        objectId: sessionStorage.objectId,
    }
}

export function delUserData() {
    sessionStorage.clear()
}