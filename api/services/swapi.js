import { apiBaseUrl, basicReq } from '../config.js';

export const fetchFilmsInfo = async () => {
    return await basicReq(`${apiBaseUrl}/films`);
};

export const fetchSingleFilm = async (id) => {
    return await basicReq(`${apiBaseUrl}/films/${id}`);
};

export const fetchPlanet = async (id) => {
    return await basicReq(`${apiBaseUrl}/planets/${id}`);
};
