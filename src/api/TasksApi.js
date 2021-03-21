import http from 'axios';

export async function getTaskList({ pageSize, page, containsTitle }) {
    const response = await http.get('tasks', {
        params: { containsTitle, perPage: pageSize, page }
    });
    if (response.status === 200) return response.data;

    throw response;
}

export async function getTask(id) {
    const response = await http.get(`tasks/${id}`);
    if (response.status === 200) return response.data;

    throw response;
}

export async function createTask({ title, description, type }) {
    return await http.post('tasks', { title, description, type })
}

export async function updateTask({ id, title, description, type, status }) {
    return await http.put('tasks', { id, title, description, type, status })
}

export async function deleteTask(id) {
    return await http.delete(`tasks/${id}`)
}