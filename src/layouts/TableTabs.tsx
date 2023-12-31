import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Trainee from "../components/Trainee";
import Attendance from "../components/Attendance";
import Activities from "../components/Activities";

import PeopleIcon from "@mui/icons-material/People";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import { useLocation } from "react-router-dom";
import Sessions from "../components/Sessions";

//tab panel
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

//typescript proptypes
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

//index of tab panel
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
  const sessions = state && state.sessions;
  const trainer = state && state.trainer;
  const courseID = state && state.courseID;

  const data = {
    title: title,
    trainer: trainer,
    courseID: courseID,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      {title && <p className="text-3xl font-bold">{title}</p>}
      {/* tab panel box */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="  w-[32%] p-2 ml-6 "
        >
          <Tab
            label="Sessions"
            {...a11yProps(3)}
            icon={<PermContactCalendarIcon />}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          />
          <Tab
            label="Trainee"
            {...a11yProps(0)}
            icon={<PeopleIcon />}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          />
          <Tab
            label="Attendance"
            {...a11yProps(1)}
            icon={<ChecklistIcon />}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          />
          <Tab
            label="Activities"
            {...a11yProps(2)}
            icon={<LineAxisIcon />}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          />
        </Tabs>
      </Box>
      {/* container of each tabs */}
      <CustomTabPanel value={value} index={0}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Sessions />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Trainee />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Attendance setShowAlert={setShowAlert} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className=" rounded-2xl shadow-xl p-5">
          <Activities setShowAlert={setShowAlert} data={data} />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
