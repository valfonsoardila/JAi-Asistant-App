import React, { useEffect } from "react";
import "./HomePage.css";
// import * as echarts from "echarts";
import {resources} from "../../../assets/resources";
import CustomButton from "../../../components/utils/buttons/ButtonNewChat";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div className="home-page" initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="columnOne">
        <div className="columnOne-rowOne">
          {/* <div id="chart" className="chart-lineal"/> */}
          <div className="columnOne-content">
            <img src={resources.jaiassistant4} alt="logo" className="logo" />
            <div className="columnOne-content-text">
              <h1>¡Bienvenido!</h1>
              <h1>Hola, Soy JAI 👋</h1>
              <CustomButton text="Nuevo Chat" />
            </div>
          </div>
        </div>
        <div className="columnOne-rowTwo"></div>
      </div>
      <div className="columnTwo"></div>
    </motion.div>
  );
};

export default HomePage;
