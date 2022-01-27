import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="form">
      <input
        type="text"
        className="form-control search"
        placeholder="Search for a country..."
      />
      <select
        className="form-select filter"
        aria-label="Default select example"
        defaultValue=""
      >
        <option defaultValue="" hidden>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europa">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
