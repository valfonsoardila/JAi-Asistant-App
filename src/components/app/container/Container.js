import React from "react";
import Header from "../header/Header";
import HomePage from "../../../modules/dashboard/home/HomePage";
// import ProfilePage from "../../../modules/dashboard/profile/ProfilePage";
// import AppointmentCalendar from "../../../modules/dashboard/appointment/AppointmentCalendarPage";
// import DiagnosesPage from "../../../modules/dashboard/patient/diagnoses/DiagnosesPage";
// import HistoriesPage from "../../../modules/dashboard/patient/histories/HistoriesPage";
// import SchedulPage from "../../../modules/dashboard/schedule/SchedulePage";
import { motion } from "framer-motion";
import "./Container.css";

const Container = ({activeComponent}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}
    className="main-container-content">
      <Header />
      <div className="main-container-body">
        <motion.div initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="main-container-body-content">
          {activeComponent === "home" && (
            <HomePage />
          )}
          {
            activeComponent === "chats" && (
              {/* <AppointmentCalendar /> */}
            )
          }
          {activeComponent === "profile" && (
            {/* <DiagnosesPage /> */}
          )}
          {activeComponent === "support" && (
            {/* <HistoriesPage /> */}
          )}
          {activeComponent === "settings" && (
            {/* <SchedulPage /> */}
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Container;
