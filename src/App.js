import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Arena from "./pages/Arena";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/arena" element={<Arena/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
