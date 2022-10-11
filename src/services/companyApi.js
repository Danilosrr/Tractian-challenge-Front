import api from './api';

export async function getAllCompanies() {
    const response = await api.get(`/company`);
    return response.data;
}