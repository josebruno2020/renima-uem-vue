export function fillUser(user) {
    let localUser = localStorage.getItem('user');
    if(localUser) {
        localStorage.removeItem('user');
    }
    localStorage.setItem('user', user);
}

