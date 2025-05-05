import React, { Component, useEffect, useState } from 'react'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { Tag } from 'antd';

interface linkObj{
  design?: string;
  code?: string;
  website?: string;
}


interface Props {
  title: string;
  subTitle: string;
  preview: string;
  link: linkObj;
  description: string;
  tags: string[];
}

const ProjectList: React.FC<Props> = ({ title,subTitle,preview,link,description,tags }) => {
    const imagePath = require(`../img/${preview}`); // Dynamically import images
    const [listProject, setlistProject] = useState("collapse");

    // const 
      const [imgState, setimgState] = useState(true);    
      useEffect(() => {
        const handleResize = () => {
          setimgState(window.innerWidth >= 800);
        };
      
        // Call the function initially to set the correct state
        handleResize();
      
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
      <div>
       <div style={{ position: "relative" }}>
          <div
            style={{
              height: "120px",
              backgroundColor: "#dcd7c9",
              borderColor: "#705c53",
              borderStyle: "solid",
              borderWidth: "1px",
              margin: "15px 0",
              borderRadius: "10px",
              display: "flex",
              zIndex: 10010,
              position: "relative", // Added position
            }}
          >
            {imgState &&

            <img
              className='img-list-project'
              src={imagePath}
              alt=""
              style={{
                minWidth:"240px",
                width: "40%",
                objectFit: "cover",
                borderRadius: "10px 0 0 10px",
                borderRight:"1px solid #705c53"
              }}
            />
            }
            <div style={{ margin: "auto 15px" }}>
              <h3>{title}</h3>
              {/* 1 title */}
              <p>{subTitle}</p>
              {/* 2 sub-title */}
            </div>
            <CaretDownOutlined
              onClick={() => setlistProject(prev => (prev === "notCollapse" ? "collapse" : "notCollapse"))}
              style={{
                color: "#3F4F44",
                fontSize: "32px",
                marginLeft: "auto",
                marginRight: "20px",
                transition: "transform 0.8s",
                transform: listProject === "notCollapse" ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
          
          {listProject === "notCollapse" ? (
            <div
            className='container-project'
            style={{
              backgroundColor: "#eddfe0",
              borderColor: "#705c53",
              borderStyle: "solid",
              borderWidth: "1px",
              marginTop: "-135px",
              borderRadius: "10px",
              padding:"125px 15px 15px 15px",
              zIndex: 1000,
              position: "relative", // Added position
              width: "100%", // Ensures it fits parent
              maxWidth: "100%", // Prevents overflow
              overflow: "hidden", // Stops content from bleeding
              display: "flex",
              flexDirection: "column",
              // transition: "height 2s linear"
            }}
            >
              <div className="content-project">
                <div className="column-project">
                  <section className='sub-title-project'>
                    <h3>Preview</h3>  
              {/* 3 preview */}
                    <img
                      src={imagePath}
                      alt=""
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        margin:"5px 0",
                        
                      }}
                      />              
                  </section>
                  <section className='sub-title-project'>
                    <h3 style={{margin:"5px 0"}}>Technology</h3>           
                      {/* 6 tags */}
                      {
                        tags.map((item, index) => (
                          <Tag key={index} style={{ fontSize: "13px",padding:"8px",margin:"5px" }} color="#705C53">{item}</Tag>
                        ))
                      }
                </section>


                </div>

                <div className="column-project">
                <section className='sub-title-project'>
                  <h3>Description</h3>           
                      {/* 5 description */}
                  <p style={{textAlign:'justify'}}>
                    {description}
                  </p>
                </section>
                <section className='sub-title-project'>
                    <h3>Link</h3>   
                        {/* 4 link */}
                      {
                        link.design ?
                        <>
                          <p style={{ fontWeight:"bold",margin:"5px 0"}}>Design</p>    
                          <a className="link-project" href={link.design} target="_blank" rel="noopener noreferrer">{link.design}</a>
                        </>
                        : null
                      } 
                      {
                        link.code ?
                        <>
                          <p style={{ fontWeight:"bold",margin:"5px 0"}}>Code</p>        
                          <a className="link-project" href={link.code} target="_blank" rel="noopener noreferrer">{link.code}</a>
                        </>
                        : null
                      }   
                      {
                        link.website ?
                        <>
                          <p style={{ fontWeight:"bold",margin:"5px 0"}}>Website</p>        
                          <a className="link-project" href={link.website} target="_blank" rel="noopener noreferrer">{link.website}</a>
                        </>
                        : null
                      }
                  </section>
                </div>

              </div>
            </div>
          ) : null}
        </div>

        
      </div>    
      )
        
  }

export default ProjectList