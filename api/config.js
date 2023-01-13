import fetch from 'node-fetch';
export const apiBaseUrl = 'https://swapi.dev/api/';

export const basicReq = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
