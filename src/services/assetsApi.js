import api from './api';

export async function getAllAssets(companyId) {
    const response = await api.get(`/assets/${companyId}`);
    return response.data;
}