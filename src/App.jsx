import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlowerHaha from "./pages/FlowerHaha";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flower" element={<FlowerHaha />} />
    </Routes>
  );
}

export default App;
