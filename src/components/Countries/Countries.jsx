import React, { useEffect, useState } from "react";
import "./Countries.css";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";

const Countries = () => {
  const allCountries = useSelector((store) => store.allCountries);
  const searchCountry = useSelector((store) => store.searchCountry);
  const isLoading = useSelector((store) => store.isLoading);
  const filteredRegion = useSelector((store) => store.filteredRegion);

  const [countriesList, setCountriesList] = useState(allCountries);

  const filteredCountries = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const filteredByRegion = allCountries.filter(
    (country) => country.region.toLowerCase() == filteredRegion.toLowerCase()
  );

  console.log(filteredRegion);

  useEffect(() => {
    if (filteredCountries) {
      setCountriesList(filteredCountries);
    }
  }, [allCountries]);

  useEffect(() => {
    if (filteredRegion) {
      setCountriesList(filteredByRegion);
    }
  }, [filteredRegion]);

  const navigate = useNavigate();
  console.log(allCountries);

  return (
    <>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : (
        countriesList.map((country) => (
          <article
            className="country-container"
            key={country.name}
            onClick={() => navigate(`/country/${country.name}`)}
          >
            <img src={country.flags.png} alt={country.name} />
            <div className="information-container">
              <p className="name">{country.name}</p>
              <p>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}{" "}
                </span>
              </p>
              <p>
                Region: <span> {country.region}</span>
              </p>
              <p>
                Capital: <span> {country.capital}</span>
              </p>
            </div>
          </article>
        ))
      )}
    </>
  );
};

export default Countries;
