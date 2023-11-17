import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrainerNav from "./pages/TrainerNav";
import Dashboard from "./pages/Dashboard";
import Training from "./pages/Training";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      {/* <TrainerNav ></TrainerNav>
      <Routes></Routes> */}
      <Routes>
        <Route path="/" element={<TrainerNav />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="training" element={<Training />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
