import { Button, Input, message, Tooltip } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {GithubLogo,WaLogo,EmailLogo} from '../img/LogoSvg'
import React, { Component } from 'react'

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
    const handleCopyClick = (emailText:string,msgText:string) => {
      navigator.clipboard.writeText(emailText)
        .then(() => messageApi.open({
          type: 'success',
          content: `${msgText} Copied!`,
          })
        )
        .catch(() =>  messageApi.open({
            type: 'error',
            content: 'Failed to copy!',
          })
        );
    };

    return (
      <div className='section-list'>
        {contextHolder}
        <h2 style={{paddingTop:"3%"}}>Contact me...</h2>
        <p>Get in touch with me to my email or other social media</p>
        <div style={{ margin:"20px 0",display:'flex'}}>
          
        <Tooltip color='#3F4F44' title="Click to copy!">
          <EmailLogo onClick={() => handleCopyClick("naufalghozi1100@gmail.com","Naufal Email")} style={{marginRight:"24px",cursor:"pointer"}} />
        </Tooltip>
        <Tooltip color='#3F4F44' title="Click to copy!">
          <WaLogo onClick={() => handleCopyClick("+6285334412198","Naufal Contact")} style={{marginRight:"24px",cursor:"pointer"}} />
        </Tooltip>
        <Tooltip color='#3F4F44' title="Click to go this page!">
          <a href="https://github.com/falzee" target="_blank" rel="noopener noreferrer">
            <GithubLogo style={{marginRight:"24px",cursor:"pointer",textDecoration:"none"}} />
          </a>
        </Tooltip>
        </div>

        <p style={{fontSize:"24px"}}>or leave a message here!</p>

        <div style={{ position: "relative", margin: "0 -10px" }}>
          <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%", // Covers the form completely
            // background: "rgba(70, 57, 58,0.78)", // Light red overlay with transparency
            // borderRadius:"10px",
            backdropFilter: "blur(3px)", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#3F4F44",
            zIndex: 10001
          }}>
            Sorry under construction 🚧
          </div>

          {/* Form content */}
          <div style={{
            zIndex: 10000,
            padding: "10px",
            position: "relative",
          }}>
            <p style={{ marginTop: "5px" }}>Name* :</p>
            <Input placeholder="enter your name!" />
            <p style={{ marginTop: "5px" }}>E-mail or contact* :</p>
            <Input placeholder="enter your e-mail or contact!" />
            <p style={{ marginTop: "5px" }}>Message* :</p>
            <TextArea rows={4} placeholder="your message and advice are always appreciated!" />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <Button style={{
                width: "130px",
                height: "40px",
                fontSize: "18px",
                textDecoration: 'none',
              }}>
                Submit
              </Button>
            </div>
          </div>
        </div>




        {/* multiple Component */}
      </div>
    )
  }

export default Contact