import React, { useState } from 'react';
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { ConfigProvider } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

function App() {
  const [sider, setSider] = useState(true);
  const d = new Date();
  let year = d.getFullYear(); 
  
  useEffect(() => {
    document.title = 'M Naufal Ghozi | Portfolio';
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSider(window.innerWidth >= 700);
    };
  
    // Call the function initially to set the correct state
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <ConfigProvider
    theme={{
      components: {
        Button: {
          defaultBg: "#705C53",
          defaultColor:"#F5F5F7",
          defaultHoverBorderColor:"none",
          defaultHoverBg:"#A78C7F",
          defaultHoverColor:"#F5F5F7",
          defaultActiveBorderColor:"none",
          defaultActiveColor:"#A78C7F",
        },
        Input:{
          hoverBorderColor:"none",
          activeBorderColor:"none"
        },
        Tag:{
          defaultBg:"#a27b5c",
          defaultColor:"white"
        }
      }
    }}
  >
    <div  className='main-page' style={{
      backgroundColor:"#F5F5F7"
    }}>
      {sider ? 
        <nav
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: "200px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <a href="#about" style={{textDecoration: "none",
              fontSize:"25px",
              color: "#705C53",
              textAlign: "right",}}>About ─</a>
            <a href="#project" style={{textDecoration: "none",
              fontSize:"25px",
              color: "#705C53",
              textAlign: "right",}}>Project ─</a>
            <a href="#contact" style={{textDecoration: "none",
              fontSize:"25px",
              color: "#705C53",
              textAlign: "right",}}>Contact ─</a>
          </div>
        </nav>
        :
        <div 
          style={{
            position: "fixed",
            bottom: 50,
            right: 10,
            zIndex: 10020,
            width: "54px",
            height: "54px",
            backgroundColor: "#3F4F44",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",  // Align items horizontally
            alignItems: "center",      // Align items vertically
          }}
        >
          <a href="#">
            <CaretUpOutlined style={{color: "white", fontSize: "32px"}} />
          </a>
        </div>

      }


      {/* Sections */}
      {/* css = t r b l */}
      <div id="about" className='main-section' style={{ }}>
        <div style={{ }}>
          <About />
        </div>

        <div id="project" style={{ }}>
          <Work />
        </div>

        <div id="contact" style={{  }}>
          <Contact />      
        </div>
      </div>
      
      <footer style={{textAlign:"center",paddingBottom:'20px',color: "#705C53"}}>
        <p>© {year} Muhammad Naufal Ghozi</p>
      </footer>
      
    </div>
    </ConfigProvider>
  );
  
};

export default App;
