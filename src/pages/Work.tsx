import { Col, Row } from 'antd'
import React, { Component } from 'react'
import ProjectListComponent from '../components/ProjectList';
import projectList from '../data/Projects.json';


const Work = () => {
    return (
      <div className='section-list'>
        <h2 style={{ textAlign:'center',marginBottom:"25px",marginTop:"15px",paddingTop:"3%"}}>My Project</h2>
          {projectList.map((item) => (
            <ProjectListComponent key={item.id} title={item.title} subTitle={item.subTitle} preview={item.preview} link={item.link} description={item.description} tags={item.tags}  />
          ))}
          <div style={{ height:'120px',backgroundColor:"#dcd7c9",borderColor:'#705c53',borderStyle:"solid",borderWidth:"1px", margin:"15px 0",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3>Tune in for more...</h3>        
          </div>
      </div>
    )
  }

export default Work