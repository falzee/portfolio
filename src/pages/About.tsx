import { Button } from 'antd'
import React, { Component } from 'react'

const About = () => {
    return (
      <div id="about-section" className='section-list'>
        <p style={{ fontSize:"24px"}}>Hi, my name is</p>
        <h1 className='first-name'></h1>
        <h1 className='more-name'></h1>
        <p style={{ fontSize:"24px",fontStyle:"italic"}}>Web Developer | Software Engineer</p>
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
          href="https://drive.google.com/file/d/1f3EWRxD8maOSsWRICb9RswOeG0CC7GEX/view?usp=sharing" target="_blank" rel="noopener noreferrer"
          >
            My CV
          </Button>
        <p style={{margin:"5px 0",fontStyle:"italic"}}>For <a href="https://drive.google.com/file/d/1_-XTZbY5HY2TOF9iUOAwHDxCrkZePLdZ/view?usp=sharing" style={{ color:"#705C53"}} target="_blank" rel="noopener noreferrer">ID ver.</a> CV</p>
        </div>
      </div>
    )
  }

export default About