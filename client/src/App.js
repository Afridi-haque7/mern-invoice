import "./App.css";
import Invoice from "./pages/Invoice";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Tax from "./pages/Tax";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/tax" element={<Tax />} />
      </Routes>
    </div>
  );
}

export default App;
