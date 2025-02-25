import React, { Component, useEffect, useState } from 'react'
import dummyImg from '../img/DummyImg.webp'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { Tag } from 'antd';

const WorkComp = () => {
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
              src={dummyImg}
              alt=""
              style={{
                width: "40%",
                objectFit: "cover",
                borderRadius: "10px 0 0 10px",
              }}
            />
            }
            <div style={{ margin: "auto 15px" }}>
              <h3>Dummy Title Lorem Ipsum Dolor Sit</h3>
              <p>Self Project</p>
            </div>
            {listProject === "notCollapse" ? (
              <CaretUpOutlined
                onClick={() => setlistProject("collapse")}
                style={{ color: "#3F4F44", fontSize: "32px", marginLeft: "auto", marginRight: "20px" }}
              />
            ) : listProject === "collapse" ? (
              <CaretDownOutlined
                onClick={() => setlistProject("notCollapse")}
                style={{ color: "#3F4F44", fontSize: "32px", marginLeft: "auto", marginRight: "20px" }}
              />
            ) : null}
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
              }}
            >
              <div className="content-project">
                <div className="column-project">
                  <section className='sub-title-project'>
                    <h3>Preview</h3>  
                    <img
                      src={dummyImg}
                      alt=""
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        margin:"5px 0"
                      }}
                    />              
                  </section>
                  <section className='sub-title-project'>
                  <h3>Link</h3>   
                    <p style={{ fontWeight:"bold"}}>Design</p>        
                    <a className="link-project" href="#">https://www.w3.org/Provider/Style/dummy.html</a>
                    <p style={{ fontWeight:"bold"}}>Code</p>        
                    <a className="link-project" href="#">https://www.w3.org/Provider/Style/dummy.html</a>
                    <p style={{ fontWeight:"bold"}}>Website</p>        
                    <a className="link-project" href="#">https://www.w3.org/Provider/Style/dummy.html</a>
                </section>

                </div>

                <div className="column-project">
                <section className='sub-title-project'>
                  <h3>Description</h3>           
                  <p style={{textAlign:'justify'}}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda expedita laudantium eum praesentium, corrupti dolorem ut repudiandae doloribus fugiat eligendi aliquam rem possimus, necessitatibus accusamus aperiam deserunt. Sed, iure eveniet soluta amet eos quisquam quidem assumenda incidunt eligendi, exercitationem, ullam labore aut saepe et omnis error dolore natus doloremque est! Reiciendis in, aut illum dolorem dolores odit exercitationem amet.
                  </p>
                </section>
                <section className='sub-title-project'>
                    <h3>Technology</h3>           
                    <Tag>Tag 1</Tag>
                    <Tag>Tag 2</Tag>
                    <Tag>Tag 3</Tag>
                  </section>
                </div>

              </div>
            </div>
          ) : null}
        </div>

        
      </div>    
      )
        
  }

export default WorkComp