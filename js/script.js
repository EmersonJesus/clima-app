//Variáveis e Seleção de elementos
import API_KEY from "./apikey.js";
const apiCountryURL = "https://flagsapi.com/"; //BR/flat/64.png

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');


// Funções
const showWeatherData = (city) => {

}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city);
});