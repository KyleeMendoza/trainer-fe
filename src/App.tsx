import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrainerNav from "./pages/TrainerNav";
import Dashboard from "./pages/Dashboard";
import TrainingRoutes from "./components/TrainingRoutes";
import Training from "./pages/Training";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import TableTabs from "./layouts/TableTabs";

function App() {
  //USER INFORMATION - passing this as prop in children routes enables them to access this data.
  const user = {
    name: "Peter Roosevelt",
    job: "Licensed Trainer",
    email: "peterroosevelt@gmail.com",
    appointments: [
      {
        day: "Mon",
        date: "09-4-2023",
        time: "01:01:01",
        title: "Appointment 1",
        name: "Magnus Carlsen",
      },
      {
        day: "Tue",
        date: "09-4-2023",
        time: "01:01:01",
        title: "Appointment 2",
        name: "Hikaru Nakamura",
      },
      {
        day: "Wed",
        date: "09-4-2023",
        time: "01:01:01",
        title: "Appointment 3",
        name: "Anish Giri",
      },
    ],
    program: [
      {
        name: "Training Program",
        title: "Fire One",
        session: 5,
        date: "09-04-2023",
        // progress: "90%",
      },
      {
        name: "Training Program",
        title: "Fire Two",
        session: 5,
        date: "09-04-2023",
        // progress: "90%",
      },
      {
        name: "Training Program",
        title: "Fire Three",
        session: 5,
        date: "09-04-2023",
        // progress: "90%",
      },
    ],
    feed: [
      {
        event: "You recently change your address",
        log: "10mins ago",
      },
      {
        event: "You recently change your email",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
      {
        event: "You recently change your password",
        log: "10mins ago",
      },
    ],
  };

  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* NAVIGATION AS THE PARENT ROUTE */}
        <Route
          path="/"
          element={
            <TrainerNav showAlert={showAlert} setShowAlert={setShowAlert} />
          }
        >
          {/* CHILDREN ROUTES */}
          <Route index element={<Dashboard user={user} />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          {/* this training route has its own children routes */}
          <Route
            path="training/*"
            element={<TrainingRoutes setShowAlert={setShowAlert} />}
          />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
