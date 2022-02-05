import React, { useEffect, useState } from "react";
import "./Countries.css";
import Spinner from "../Spinner/Spinner";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAction, hideLoader, showLoader } from "../../store";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();
  const allCountries = useSelector((store) => store.allCountries);
  const searchCountry = useSelector((store) => store.searchCountry);
  const isLoading = useSelector((store) => store.isLoading);
  const filteredRegion = useSelector((store) => store.filteredRegion);

  const filteredCountries = allCountries.filter((Country) =>
    Country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );
  const filteredByRegion = allCountries.filter(
    (country) => country.region.toLowerCase() == filteredRegion.toLowerCase()
  );
  const navigate = useNavigate();

  console.log(countries);

  const callcountries = async () => {
    dispatch(showLoader());
    dispatch(getCountriesAction());
  };

  useEffect(() => {
    callcountries();
    setTimeout(() => {
      if (allCountries) {
        dispatch(hideLoader());
      }
    }, 500);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {filteredCountries.map((country) => (
        <article
          className="country-container"
          key={country.name}
          onClick={() => navigate(`/country/${country.name}`)}
        >
          <img src={country.flags.png} alt="" />
          <div className="information-container">
            <p className="name">{country.name}</p>

            <p>
              Population:{" "}
              <span>{new Intl.NumberFormat().format(country.population)} </span>
            </p>
            <p>
              Region: <span> {country.region}</span>
            </p>
            <p>
              Capital: <span> {country.capital}</span>
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default Countries;
