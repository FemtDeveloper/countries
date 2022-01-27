export const URL = "https://restcountries.com/v2/";
export const COUNTRIES =
  URL + "all?fields=name,capital,flags,population,region";
export const searchCountry = (name) => `${URL}name/${name}`;
export const regionFilter = (region) => `${URL}region/${region}`;
