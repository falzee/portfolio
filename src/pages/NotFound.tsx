// import { CaretDownOutlined, CaretUpOutlined, StopOutlined } from '@ant-design/icons'
// import { InputNumber, Typography } from 'antd'
import { Link } from "react-router"
import logo from "../img/logo-porto.webp"
// import { useState } from 'react';

const ErrorPage = () => {
    // const [numbering, setnumbering] = useState<string>("4");
  return (
    <div 
        className='error-container' style={{ 
        display:'flex',
        // flexDirection:'column',
        padding:'0',
        width:'100vw',
        height:'100vh',
        // textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        background:'#F5F5F7',
    }}
    >
    <img src={logo} style={{ margin: "auto 20px", maxWidth: "110px",minWidth:"64px" }} alt="" />
    <div style={{display:"grid",        
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'45%'
    }}>    
        <h1 >404</h1>    
        <h3>There's really nothing in here, <Link style={{color:"#3F4F44"}} to='/'>get back</Link>!</h3>   
    </div>

    
    </div>
  )
}
{/* <section style={{display:"grid"}} >
    <CaretUpOutlined style={{ color:"#3F4F44" }} />
    <CaretDownOutlined style={{ color:"#3F4F44" }} />
</section> */}

export default ErrorPage