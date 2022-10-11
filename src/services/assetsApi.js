import api from './api';

export async function getAllAssets(companyId) {
    const response = await api.get(`/assets/${companyId}`);
    return response.data;
}

export async function postNewAsset(data, companyId) {
    const response = await api.post(`/assets/${companyId}`, data);
    return response.data;
}

export async function getUnitAssets(companyId) {
    const response = await api.get(`/units/${companyId}`);
    return response.data;
}

export async function postNewUnit(data, companyId) {
    const response = await api.post(`/units/${companyId}`, data);
    return response.data;
}