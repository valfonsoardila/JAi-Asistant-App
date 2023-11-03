import React, {useEffect, useState} from "react";
import "./AnimationIntro.css";
import { resources } from "../../assets/resources";
import { motion } from "framer-motion";

const AnimationIntro = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const words = ["Bienvenido", "Continuar", "↵"]; // Lista de palabras
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentWord(words[nextIndex]);
        }, 100); // Agregamos un pequeño retraso antes de cambiar la palabra para asegurar la animación de desvanecimiento
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentWord, words]);
  function handleOnClick() {
    window.location.href = "/authentication";
  }
  return (
    <div
      className="animation-intro-container"
      initial="hidden"
      animate="visible"
      variants={imageVariants}
    >
      <div className="animation-intro">
      <div className="animation-title">
        <h1>JAi Asistant</h1>
        <span>Asistente Virtual</span>
      </div>
      <motion.div className="animation-silhouette">
        <img
          src={resources.presentacion}
          alt="silhouette"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />
        <img
          className="gif-overlay"
          src={resources.asistente}
          alt="gif-overlay"
        />
      </motion.div>
      <div className="content">
          <div className="content__container">
            <span
              className={`transition ${isTransitioning ? "fade-out" : ""}`}
              onClick={handleOnClick}
            >
              {currentWord}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationIntro;
