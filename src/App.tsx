import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
