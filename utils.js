import { fetchPlanet } from './api/services/swapi.js';

export const getPlanetsId = (data) => {
    return data.planets;
};

export const getDiameter = (planet) => {
    return Number(planet.diameter);
};

export const calcTotalDiameter = (list) => {
    return list.reduce((acc, curr) => acc + curr, 0);
};

export const isPlanetWithWaterMountains = (planet) => {
    const water = Number(planet.surface_water) > 0;
    const mountains = planet.terrain.includes('mountains');
    return water && mountains;
};

export const getDiameterFromPlanetList = async (list) => {
    let diameters = [];
    for (const planet of list) {
        const planetId = planet.split('/').at(-2);
        const planetData = await fetchPlanet(planetId);
        if (isPlanetWithWaterMountains(planetData)) {
            const planetDiameter = getDiameter(planetData);
            diameters.push(planetDiameter);
        }
    }

    return diameters;
};
