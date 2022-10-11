import api from './api';

export async function getAllCompanies() {
    const response = await api.get(`/company`);
    return response.data;
}

export async function postCompanies(data) {
    const response = await api.post(`/company`, data);
    return response.data;
}