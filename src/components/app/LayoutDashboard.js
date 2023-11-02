import React, {useState} from 'react';
import './LayoutDashboard.css';
import Sidebar from './sidebar/Sidebar';
import Container from './container/Container';
import { resources } from "../../assets/resources";

const LayoutDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const handleComponentChange = (component) => {
    setActiveComponent(component);
    console.log("componente: "+component);
  };
  return (
    <div className='main-container' style={{ backgroundImage: `url(${resources.bgDashboard})` }}>
      <div className='containerdash'>
        <Sidebar onComponentChange={handleComponentChange} />
        <div className='container-content'>
          <Container activeComponent={activeComponent} />
        </div>
      </div>
    </div>
  )
}

export default LayoutDashboard