import React from "react";
import Header from "../header/Header";
import HomePage from "../../../modules/dashboard/home/HomePage";
import ChatPage from "../../../modules/dashboard/chat/ChatPage";
import ProfilePage from "../../../modules/dashboard/profile/ProfilePage";
import SupportPage from "../../../modules/dashboard/support/SupportPage";
import SettingsPage from "../../../modules/dashboard/setting/SettingPage";
import { motion } from "framer-motion";
import "./Container.css";

const Container = ({activeComponent}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}
    className="main-container-content">
      <Header onComponentChange={activeComponent} />
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
              <ChatPage />
            )
          }
          {activeComponent === "profile" && (
            <ProfilePage />
          )}
          {activeComponent === "support" && (
            <SupportPage />
          )}
          {activeComponent === "settings" && (
            <SettingsPage />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Container;
