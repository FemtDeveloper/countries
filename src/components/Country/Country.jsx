import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Country.css";
import { COUNTRIES } from "../../urls";
import Spinner from "../Spinner/Spinner";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(countries);
  const fetchingData = () => {
    setIsLoading(true);
    axios
      .get(COUNTRIES)
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {countries.map((country) => (
        <article className="country-container" key={country.name}>
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

export default Country;
