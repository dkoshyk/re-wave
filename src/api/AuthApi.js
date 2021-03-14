import http from 'axios';

export async function signIn(login, password) {
    const response = await http.post('authenticate', { login, password });
    if (response.status === 200) return response.data;

    throw response;
}