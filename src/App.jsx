import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/Country/CountryDetails";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
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
