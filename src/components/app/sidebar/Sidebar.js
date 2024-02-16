import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import menuItem from "../../../assets/jsons/menu.item.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faToolbox,
  faWrench,
  faDoorOpen,
  faComment,
  faUser,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onComponentChange }) => {
  const [hover, setHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home"); // Nuevo estado para el ítem seleccionado

  const handleMenuItemClick = (menuItemName) => {
    setSelectedItem(menuItemName); // Establecer el ítem seleccionado al hacer clic en él
    onComponentChange(menuItemName); // Llamar a la función de cambio de componente
  };

  const handleOutSesionClick = () => {
    window.location.href = "/";
  };
  const changeHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="container-sidebar"
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
    >
      <div className="sidebar-logo" style={{ height: hover ? "0%" : "15%" }}>
        <div
          className="sidebar-logo-circle"
          style={{ display: hover ? "none" : "flex" }}
        >
          <img src={resources.logo} alt="logo" />
        </div>
        <h1 style={{ display: hover ? "none" : "block" }}>JAi</h1>
      </div>
      <div className="profile">
        <img src={resources.user} alt="profile" />
        <h1>USER</h1>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <span>Menu</span>
        </div>
        <div
          className="sidebar-menu-item"
          onClick={() => handleMenuItemClick("home")}
        >
          <FontAwesomeIcon icon={faHome} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item1}
          </span>
          {selectedItem === "home" && <FontAwesomeIcon icon={faCaretRight} fade />}{" "}
          {/* Mostrar el icono de faAngleRight si el ítem está seleccionado */}
        </div>
        <div
          className="sidebar-menu-item"
          onClick={() => handleMenuItemClick("chats")}
        >
          <FontAwesomeIcon icon={faComment} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item2}
          </span>
          {selectedItem === "chats" && <FontAwesomeIcon icon={faCaretRight} fade />}{" "}
          {/* Mostrar el icono de faAngleRight si el ítem está seleccionado */}
        </div>
        <div
          className="sidebar-menu-item"
          onClick={() => handleMenuItemClick("profile")}
        >
          <FontAwesomeIcon icon={faUser} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item3}
          </span>
          {selectedItem === "profile" && <FontAwesomeIcon icon={faCaretRight} fade />}{" "}
          {/* Mostrar el icono de faAngleRight si el ítem está seleccionado */}
        </div>
        <div
          className="sidebar-menu-item"
          onClick={() => handleMenuItemClick("support")}
        >
          <FontAwesomeIcon icon={faToolbox} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item4}
          </span>
          {selectedItem === "support" && <FontAwesomeIcon icon={faCaretRight} fade />}{" "}
          {/* Mostrar el icono de faAngleRight si el ítem está seleccionado */}
        </div>
        <div
          className="sidebar-menu-item"
          onClick={() => handleMenuItemClick("settings")}
        >
          <FontAwesomeIcon icon={faWrench} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item5}
          </span>
          {selectedItem === "settings" && <FontAwesomeIcon icon={faCaretRight} fade />}{" "}
          {/* Mostrar el icono de faAngleRight si el ítem está seleccionado */}
        </div>
      </div>
      <div className="sidebar-menu-sesion">
        <div
          className="sidebar-menu-item-sesion"
          onClick={handleOutSesionClick}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
          <span style={{ display: hover ? "flex" : "none" }}>
            {menuItem.item6}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
