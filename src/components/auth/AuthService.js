const STORAGE_KEY = 'user';

export function getAuthUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function getToken() {
    return getAuthUser()?.token;
}

export function saveAuthUser(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function removeAuthUser() {
    localStorage.removeItem(STORAGE_KEY);
}