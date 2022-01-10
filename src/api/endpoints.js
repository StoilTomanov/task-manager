const host = 'https://parseapi.back4app.com'

export const endpoint = {
    register: host + '/users',
    login: host + '/login',
    logout: host + '/logout',
    users: host + '/users/',
    tasksData: host + '/classes/Tasks?where=',
    create: host + '/classes/Tasks'
}