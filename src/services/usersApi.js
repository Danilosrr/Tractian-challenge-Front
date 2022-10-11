import api from './api';

export async function getAllUsers(companyId) {
    const response = await api.get(`/users/${companyId}`);
    return response.data;
}

export async function postNewUser(data, companyId) {
    const response = await api.post(`/users/${companyId}`, data);
    return response.data;
}