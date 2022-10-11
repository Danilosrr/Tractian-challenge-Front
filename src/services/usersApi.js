import api from './api';

export async function getAllUsers(companyId) {
    const response = await api.get(`/users/${companyId}`);
    return response.data;
}