import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Filter.css";
import {
  filterRegionFunction,
  searchCountryFunction,
  getCountriesAction,
} from "../../store";
import { FiSearch } from "react-icons/fi";

const Filter = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const dispatch = useDispatch();

  const callcountries = async () => {
    dispatch(getCountriesAction());
  };

  useEffect(() => {
    callcountries();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(searchCountryFunction(searchCountry));
  }, [searchCountry]);

  useEffect(() => {
    dispatch(filterRegionFunction(region));
  }, [region]);

  return (
    <>
      <div className="form">
        <div className="input-container">
          <FiSearch />
          <input
            value={searchCountry}
            type="text"
            className="form-control search"
            placeholder="Search for a country..."
            name="search"
            onChange={handleSearch}
          />
        </div>
        <select
          className="form-select filter"
          aria-label="Default select example"
          defaultValue=""
          onChange={handleFilter}
        >
          <option defaultValue="" hidden>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
