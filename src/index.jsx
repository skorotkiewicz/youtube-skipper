import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Video from "./pages/Video";
import About from "./pages/About";
import E404 from "./pages/E404";
import "./YouTubeSkipper.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/youtube-skipper">
      <Routes>
        <Route index element={<App />} />
        <Route path="video" element={<Video />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
