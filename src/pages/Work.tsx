import { Col, Row } from 'antd'
import React, { Component } from 'react'
import WorkComp from '../components/WorkComp';
import ProjectList from '../components/ProjectList';
import projectList from '../data/Projects.json';


const Work = () => {
    return (
      <div className='section-list'>
        <h2 style={{ textAlign:'center',marginBottom:"25px",marginTop:"15px",paddingTop:"3%"}}>My Project</h2>
        {/* title,subTitle,preview,link,description,tags */}
        {projectList.map((item) => (
          <ProjectList key={item.id} title={item.title} subTitle={item.subTitle} preview={item.preview} link={item.link} description={item.description} tags={item.tags}  />
        ))}
        {/* <WorkComp />
        <WorkComp /> */}
        <div style={{ height:'120px',backgroundColor:"#dcd7c9",borderColor:'#705c53',borderStyle:"solid",borderWidth:"1px", margin:"15px 0",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h3>Tune in for more...</h3>        
        </div>
        <p></p>
        {/* 4 logo */}
      </div>
    )
  }

export default Work