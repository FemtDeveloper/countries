import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const isLoading = useSelector((store) => store.isLoading);
  if (!isLoading) return null;
  return (
    <div className="spinner-container">
      <div
        className="spinner-border text-primary loader"
        role="status"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    </div>
  );
};

export default Spinner;
