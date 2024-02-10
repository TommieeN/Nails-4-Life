import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
    <BrowserRouter>
      <MobileNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
