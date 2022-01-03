export function setUserData(username, sessionToken, objectId, isTeam) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('sessionToken', sessionToken);
    sessionStorage.setItem('objectId', objectId);
    sessionStorage.setItem('isTeam', isTeam);
}

export function getUserData() {
    return {
        username: sessionStorage.username,
        sessionToken: sessionStorage.sessionStorage,
        objectId: sessionStorage.objectId,
        isTeam: sessionStorage.isTeam,
    }
}

export function clearUserData() {
    sessionStorage.clear();
}