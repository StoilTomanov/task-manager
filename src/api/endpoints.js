const host = 'https://parseapi.back4app.com'

export const endpoint = {
    register: host + '/users',
    login: host + '/login',
    logout: host + '/logout',
    delete: host + '/users/' + sessionStorage.objectId,
}