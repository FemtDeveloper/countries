import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { COUNTRIES } from "../../urls";

const ReduxCountries = ({ allCountries }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(countries);

  // const fetchingData = () => {
  //   setIsLoading(true);
  //   axios
  //     .get(COUNTRIES)
  //     .then((res) => {
  //       setCountries(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchingData();
  // }, []);

  return (
    <div>
      <h1>hola</h1>
      <input type="text" onChange={(e) => setCountries(e.target.value)} />
      {/* {countries.map((country) => (
        <article className="country-container" key={country.name}>
          <img src={country.flags} alt="" />
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
      ))} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allCountries: state.allCountries,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCountries);
