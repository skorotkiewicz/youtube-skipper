import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import App from "./App";
import Video from "./pages/Video";
import E404 from "./pages/E404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="video" element={<Video />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
