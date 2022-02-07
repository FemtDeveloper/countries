import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { name } = useParams();
  const urlCountry = `https://restcountries.com/v2/name/${name}`;

  const [countryDetail, setCountryDetail] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  console.log(countryDetail);
  // console.log(countryDetail.currencies[0].name);

  useEffect(async () => {
    const allCountries = async () => {
      const res = await axios.get(urlCountry);
      await setCountryDetail(res.data[0]);
      setImageUrl(res.data[0].flag);
      setCurrencies(res.data[0].currencies[0].name);
      setLanguages(res.data[0].languages);
      return res;
    };
    allCountries(name);
  }, [urlCountry]);

  return (
    <>
      <div className="detail-container">
        <img src={imageUrl} alt="" />
        <div className="information-container">
          <h2 className="detail-name">{countryDetail.name}</h2>
          <div className="information">
            <div className="main-details">
              <p className="detail-item">
                Native name: <span> {countryDetail.nativeName}</span>
              </p>
              <p className="detail-item">
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(countryDetail.population)}
                </span>
              </p>
              <p className="detail-item">
                Region: <span> {countryDetail.region}</span>
              </p>
              <p className="detail-item">
                Sub Region: <span> {countryDetail.subregion}</span>
              </p>
              <p className="detail-item">
                Capital: <span> {countryDetail.capital}</span>
              </p>
            </div>
            <div className="other-details">
              <p className="detail-item">
                Top Level Domain: <span> {countryDetail.topLevelDomain}</span>
              </p>
              <p className="detail-item">
                Currencies: <span> {currencies}</span>
              </p>
              <p className="detail-item">
                Languages:{" "}
                {languages.map((lang) => (
                  <span>{lang.name} </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
