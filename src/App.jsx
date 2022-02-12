import "./App.css";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/Country/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <Router>
      <div className={isDarkMode ? "dark-mode" : "App"}>
        <Navbar />
        <div className="countries">
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:name" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
