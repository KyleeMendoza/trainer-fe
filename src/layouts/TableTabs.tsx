import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Trainee from "../components/Trainee";
import Attendance from "../components/Attendance";
import Activities from "../components/Activities";

import { useLocation } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TableTabs({ setShowAlert }) {
  const location = useLocation();

  const [value, setValue] = React.useState(0);
  const { state } = location;
  const title = state && state.title;
  const sessions = state && state.sessions; //if you'll ever need the session be declared in db

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      {title && <p className="text-3xl font-bold">{title}</p>}
      {/* <p className="text-3xl font-bold">Basic Fire and Safety</p> */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="  w-[32%] p-2 ml-6 "
        >
          <Tab label="Trainee" {...a11yProps(0)} />
          <Tab label="Attendance" {...a11yProps(1)} />
          <Tab label="Activities" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Trainee />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Attendance setShowAlert={setShowAlert} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Activities setShowAlert={setShowAlert} />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
