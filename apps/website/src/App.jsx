import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}

export default App;