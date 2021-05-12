export function fillUser(user, tokenUser) {
    let localUser = localStorage.getItem('user');
    if(localUser) {
        localStorage.removeItem('user');
    }
    localStorage.setItem('user', user);

    let token = localStorage.getItem('user-token');
    if(token) {
        localStorage.removeItem('user-token');
    }
    localStorage.setItem('user-token', tokenUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function setModuleActive(moduleActive) {
    let user = JSON.parse(localStorage.getItem('user'));
    user.module_active = moduleActive;
    user = JSON.stringify(user);
    return localStorage.setItem('user', user);

}

