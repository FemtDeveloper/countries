import "./App.css";
import Filter from "./components/Filter/Filter";
import { Provider } from "react-redux";
import store from "./store";
import ReduxCountries from "./components/ReduxCountries/ReduxCountries";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/Country/CountryDetails";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Countries</h1>
          <Filter />
          <div className="countries">
            <Routes>
              <Route path="/" element={<Countries />} />
              <Route path="/country/:name" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
