const host = 'https://parseapi.back4app.com'

export const endpoint = {
    register: host + '/users',
    login: host + '/login',
    logout: host + '/logout',
    users: host + '/users/',
    tasksData: host + '/classes/Tasks?where=',
    userQuery: host + '/users?where=',
    create: host + '/classes/Tasks',
    update: host + '/classes/Tasks/',
    update: host + '/users/me',
}