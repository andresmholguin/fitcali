import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FranjaPage from "./pages/FranjaPage";

function App() {
  return (
    <HashRouter>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franja/:slug" element={<FranjaPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
