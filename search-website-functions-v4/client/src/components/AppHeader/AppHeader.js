import React from 'react';
import AppHeaderAuth from '../AppHeaderAuth/AppHeaderAuth';
// import { useNavigate } from "react-router-dom";
import logo from '../../images/microsoft_small.png';

import './AppHeader.css';

export default function AppHeader() {
  //const navigate = useNavigate();
  
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={logo} height="100" className="navbar-logo" alt="Microsoft" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/search" style={{fontSize:"20px",color:"black"}}>Search</a>
            </li>
            
          </ul>
        </div>


        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className="uploadTag">
              <div className="uploadBtn" href="/uploadFile">UPLOADFILE</div>
            </div>
            
          </ul>
        </div> */}
        <div className="uploadTag">
              <a className="uploadBtn" href="/uploadFile">UPLOAD FILE</a>
        </div>
        {/* <div className="uploadTag">
      
             <div className="uploadBtn" onClick={handleUploadFile}>Upload Button</div>     
        </div> */}
        <AppHeaderAuth />
      </nav>
      
    </header>
  );
};
