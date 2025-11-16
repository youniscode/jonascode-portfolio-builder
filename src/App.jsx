import { Routes, Route } from "react-router-dom";
import PortfolioBuilder from "./PortfolioBuilder.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioBuilder />} />
    </Routes>
  );
}
