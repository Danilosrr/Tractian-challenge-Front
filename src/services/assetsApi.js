import api from './api';

export async function getAllAssets(companyId) {
    const response = await api.get(`/assets/${companyId}`);
    return response.data;
}

export async function getUnitAssets(companyId) {
    const response = await api.get(`/units/${companyId}`);
    return response.data;
}