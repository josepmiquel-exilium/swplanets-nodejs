import { apiBaseUrl, basicReq } from '../config.js';

export const fetchFilmsInfo = async () => {
    const data = await basicReq(`${apiBaseUrl}/films`);
    return data;
};

export const fetchSingleFilm = async (id) => {
    const data = await basicReq(`${apiBaseUrl}/films/${id}`);
    return data;
};

export const fetchPlanet = async (id) => {
    const data = await basicReq(`${apiBaseUrl}/planets/${id}`);
    return data;
};
