import http from 'axios';

export async function getTaskList({ pageSize, page, containsTitle }) {
    const response = await http.get('tasks', {
        params: { containsTitle, perPage: pageSize, page }
    });
    if (response.status === 200) return response.data;

    throw response;
}

export async function createTask(request) {
    return await http.post('tasks', request)
}