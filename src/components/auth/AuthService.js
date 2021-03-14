const STORAGE_KEY = 'user';

export function isAuth() {
    return getAuthUser()?.result ?? false;
}

export function getAuthUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function getToken() {
    return getAuthUser()?.token;
}

export function saveAuthUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function removeAuthUser(user) {
    localStorage.removeItem(STORAGE_KEY);
}