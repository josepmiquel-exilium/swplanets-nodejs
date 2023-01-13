import { fetchFilmsInfo, fetchPlanet, fetchSingleFilm } from './api/services/swapi.js';
import { calcTotalDiameter, getDiameterFromPlanetList, getPlanetsId } from './utils.js';
import { filmsIdIsValid, inputIsNumber } from './validators.js';

const filmId = process.argv[2];

// Write you code here
async function main() {
    try {
        // Check if the input is a number
        inputIsNumber(filmId);

        // Fetch the main data of all the films to check if the film exists.
        // We could delete this feature to avoid a call to the API
        // and handle it manually
        const filmsMainData = await fetchFilmsInfo();
        filmsIdIsValid(filmId, filmsMainData);

        const singleFilmData = await fetchSingleFilm(filmId);

        const planetsId = getPlanetsId(singleFilmData);

        const diameters = await getDiameterFromPlanetList(planetsId);
        const totalDiameter = calcTotalDiameter(diameters);

        console.log(totalDiameter);
    } catch (error) {
        console.log(error);
    }
}

main();
