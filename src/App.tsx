import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrainerNav from "./pages/TrainerNav";

function App() {
  return (
    <BrowserRouter>
      <TrainerNav />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
