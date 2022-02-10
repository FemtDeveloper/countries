import axios from "axios";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { COUNTRIES, URL } from "./urls";

const initialState = {
  allCountries: [],
  countryDetails: [],
  isLoading: false,
  searchCountry: "",
  filteredRegion: "",
  isDarkMode: true,
};

const GET_COUNTRIES = "GET_COUNTRIES";
const FETCH_COUNTRY = "FETCH_COUNTRY";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };
    case "SHOW_LOADER":
      return {
        ...state,
        isLoading: true,
      };

    case "HIDE_LOADER":
      return {
        ...state,
        isLoading: false,
      };
    case "SEARCH_COUNTRY":
      return {
        ...state,
        searchCountry: action.payload,
      };
    case "FILTER_REGION":
      return {
        ...state,
        filteredRegion: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allCountries: reducer,
});

export const getCountriesAction = () => async (dispatch, getState) => {
  const res = await axios.get(COUNTRIES);
  dispatch({
    type: GET_COUNTRIES,
    payload: res.data,
  });
};
export const showLoader = () => (dispatch) => {
  dispatch({
    type: "SHOW_LOADER",
  });
};
export const hideLoader = () => (dispatch) => {
  dispatch({
    type: "HIDE_LOADER",
  });
};
export const searchCountryFunction = (country) => (dispatch) => {
  dispatch({
    type: "SEARCH_COUNTRY",
    payload: country,
  });
};
export const filterRegionFunction = (region) => (dispatch) => {
  dispatch({
    type: "FILTER_REGION",
    payload: region,
  });
};
export const setDarkMode = (theme) => (dispatch) => {
  console.log(theme);
  dispatch({
    type: "SET_THEME",
    payload: theme,
  });
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
