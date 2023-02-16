import React from 'react';
import { useNavigate } from 'react-router';
import NavBar from '../components/NavBar';

function NotFound(props) {
    const navigate=useNavigate()
    const backHome=()=>{
        navigate('/')
    };
    return (
        <div style={{textAlign:"center",margin:"25vh 0"}}>
            <NavBar/>
            <h1>Not Found</h1>
            <button onClick={backHome} style={{fontWeight:"600",border:"none",borderRadius:"10px", color:"white",background:"pink",marginTop:"20px",padding:"15px 25px",cursor:"pointer"}}>Go Back</button>
        </div>
    );
}

export default NotFound;