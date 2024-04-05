import "./App.css";
import Invoice from "./pages/Invoice";
import { Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  );
}

export default App;
