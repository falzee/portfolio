import { Button } from 'antd'
import React, { Component } from 'react'

const About = () => {
    return (
      <div id="about-section" className='section-list'>
        <p style={{ fontSize:"24px"}}>Hi, my name is</p>
        <h1>Muhammad</h1>
        <h1>Naufal Ghozi</h1>
        <p style={{ fontSize:"24px",fontStyle:"italic"}}>Web Developer</p>
        <p style={{paddingRight:"10%",marginTop:'5px'}}>
          With experience more than 2 years in the world of "pixel perfecting" your website desain to become reality. You can see more information about me and my skills in my CV right below! 👇
        </p>

        <div style={{
            margin:"20px 0 17% 0",
          }}
        >
        {/* <p style={{marginBottom:'5px'}}>
          More information about me and my skills in my CV right below!
        </p> */}
          <Button style={{
            width:"150px",
            height:"50px",
            minHeight:"50px",
            fontSize:"22px",
            textDecoration: 'none' 
          }}
          href="https://drive.google.com/file/d/1Z8P9PMS7hN78doy91DGx44fVJsO0gXQP/view?usp=sharing" target="_blank" rel="noopener noreferrer"
          >
            My CV
          </Button>
        <p style={{margin:"5px 0",fontStyle:"italic"}}>For <a href="https://drive.google.com/file/d/1XQuUkRVVSSaoDx-Ie23xt4c1R89BuKwv/view?usp=sharing" style={{ color:"#705C53"}} target="_blank" rel="noopener noreferrer">EN ver.</a> CV</p>
        </div>
      </div>
    )
  }

export default About