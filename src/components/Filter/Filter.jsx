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

  const callcountries = (e) => {
    dispatch(getCountriesAction());
  };

  useEffect(() => {
    callcountries();
  }, [searchCountry]);

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
          className="form-select filter dark-mode"
          aria-label="Default select example"
          defaultValue=""
          onChange={handleFilter}
          style={{ color: "grey" }}
        >
          <option defaultValue="" hidden>
            Filter by region
          </option>
          <option value="Africa" className="select-option">
            Africa
          </option>
          <option value="Americas" className="select-option">
            America
          </option>
          <option value="Asia" className="select-option">
            Asia
          </option>
          <option value="Europe" className="select-option">
            Europa
          </option>
          <option value="Oceania" className="select-option">
            Oceania
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
