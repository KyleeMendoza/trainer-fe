import React from "react";
import { Route, Routes } from "react-router-dom";
import Training from "../pages/Training";
import TableTabs from "../layouts/TableTabs";

function TrainingRoutes({ setShowAlert }) {
  return (
    <Routes>
      <Route index element={<Training />} />
      <Route
        path="tables"
        element={<TableTabs setShowAlert={setShowAlert} />}
      />
    </Routes>
  );
}

export default TrainingRoutes;
