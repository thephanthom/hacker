import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import DetailPage from "./pages/detail";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import QuestionsPage from "./pages/questions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/questions/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
