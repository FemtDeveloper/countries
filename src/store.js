import { createStore } from "redux";

const initialState = {
  allCountries: [],
  countriesByRegion: [],
  country: {},
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
