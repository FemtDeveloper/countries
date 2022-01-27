import { useState } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Filter from "./components/Filter/Filter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Countries</h1>
        <Filter />
        <div className="countries">
          <Country />
        </div>
      </div>
    </Provider>
  );
}

export default App;
