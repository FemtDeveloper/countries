import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Filter.css";
import { filterRegionFunction, searchCountryFunction } from "../../store";

const Filter = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    setRegion(e.target.value);
    dispatch(filterRegionFunction(region));
    console.log(region);
  };

  console.log(searchCountry);
  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
    dispatch(searchCountryFunction(searchCountry));
    e.preventDefault();
  };

  return (
    <div className="form">
      <input
        value={searchCountry}
        type="text"
        className="form-control search"
        placeholder="Search for a country..."
        name="search"
        onChange={handleSearch}
      />
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
  );
};

export default Filter;
