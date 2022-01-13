export function setUserData(username, sessionToken, objectId, isTeam, organization, teamId) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('sessionToken', sessionToken);
    sessionStorage.setItem('objectId', objectId);
    sessionStorage.setItem('isTeam', isTeam);
    sessionStorage.setItem('organization', organization);
    sessionStorage.setItem('teamId', teamId);
}

export function getUserData() {
    return {
        username: sessionStorage.username,
        sessionToken: sessionStorage.sessionStorage,
        objectId: sessionStorage.objectId,
        isTeam: sessionStorage.isTeam,
        organization: sessionStorage.organization,
        teamId: sessionStorage.teamId,
    }
}

export function clearUserData() {
    sessionStorage.clear();
}