import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FranjaPage from "./pages/FranjaPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franja/:slug" element={<FranjaPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
