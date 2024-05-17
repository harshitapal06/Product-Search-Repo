import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from '../../components/SearchBar/SearchBar';

import "./Home.css";
import "../../pages/Search/Search.css";
import logo from '../../images/UOM_logo.png';
// import Coat_Item from '../../images/coat.png';
// import battery_Item from '../../images/battery.png';
// import blade_Item from '../../images/blead.png';
// import head_Item from '../../images/head_Phone.png';
// import AppHeader from "../../components/AppHeader/AppHeader";

export default function Home() {
  const navigate = useNavigate();
  const navigateToSearchPage = (q) => {
    if (!q || q === '') {
      q = '*'
    }
    navigate('/search?q=' + q);
  }

  return (
    <main className="main main--home">
      <div className="row home-search">
        <img className="logo" src={logo} alt="Cognitive Search"></img>
        <p className="poweredby lead">Streamlined Invoice Search</p>
        <div style={{margin:"0px 0px 0px 90px"}}>
          <SearchBar postSearchHandler={navigateToSearchPage}></SearchBar>
        </div>
        {/* <AppHeader postSearchHandler={navigateToSearchPage}></AppHeader> */}
        {/* <div style={{ padding: "0px 0px 0px 270px" ,margin:"0px 0px 50px 0px"}}>
          <h5>Most Searched Products</h5>
        </div>
        <div className="results-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Coat_Item} alt="Product" style={{ marginRight: "40px", width: "200px" }} />
            <p> Corning BioCoat 384-Well, Fibronectin-Treated, U-Shaped-Bottom Microplate, Bottom: U-Shaped, Clear; 10/CS 4585 </p>
          </div>
        </div>
        <div className="results-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={battery_Item} alt="Product" style={{ margin: "40px 40px 0px 0px", width: "200px" }} />
            <p> Coast Alkaline Battery AA Industrial Performance, Includes: 24 pc, Battery Type: D, Voltage: 1.5 V, Cell Type: Coin; 24/PK 30590 </p>
          </div>
        </div>
        <div className="results-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={blade_Item} alt="Product" style={{ margin: "20px 40px 0px 0px", width: "200px" }} />
            <p> Gem2 Sng Edg Bld Crtdg 1000/Cs; 1000/CS AVBL-3000-0000 </p>
          </div>
        </div> */}
      </div>
    </main>
  );
};
