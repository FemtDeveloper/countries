import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>This country is </h1>
      <h2>{name}</h2>
    </div>
  );
};

export default Country;
