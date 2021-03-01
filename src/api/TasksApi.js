import http from 'axios';

export async function getTaskList() {
    const response = await http.get('tasks');
    if (response.status === 200) return response.data;

    throw response;
}

export async function createTask(request) {
    return await http.post('tasks', request)
}