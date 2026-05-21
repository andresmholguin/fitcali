import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FranjaPage from "./pages/FranjaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/franja/:slug" element={<FranjaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
