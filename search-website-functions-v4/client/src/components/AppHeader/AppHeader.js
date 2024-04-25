import React from 'react';
import AppHeaderAuth from '../AppHeaderAuth/AppHeaderAuth';
// import { useNavigate } from "react-router-dom";
import logo from '../../images/microsoft_small.png';
import cart_Icon from '../../images/amazon_Cart.png';
import return_Icon from '../../images/return_Order.png';
import sign_In from '../../images/amazone_sign.png';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Suggestions from './Suggestions/Suggestions';

import './AppHeader.css';
import { useNavigate } from "react-router-dom";
// import Suggestions from '../SearchBar/Suggestions/Suggestions';
import SearchBar from '../SearchBar/SearchBar';

export default function AppHeader(props) {

  const navigate = useNavigate();
  const navigateToSearchPage = (q) => {
    if (!q || q === '') {
      q = '*'
    }
    navigate('/search//?q=' + q);
  }
  //const navigate = useNavigate();
  // let [q, setQ] = useState("");
  // let [suggestions, setSuggestions] = useState([]);
  // let [showSuggestions, setShowSuggestions] = useState(false);

  // const onSearchHandler = () => {
  //   console.log("Test");
  //   props.postSearchHandler(q);
  //   // props.headerSearchHandler(q);
  //   setShowSuggestions(false);
  // }

  // const suggestionClickHandler = (s) => {
  //   document.getElementById("search-box").value = s;
  //   setShowSuggestions(false);
  //   // props.postSearchHandler(s);    
  //   // props.headerSearchHandler(s);
  // }

  // const onEnterButton = (event) => {
  //   if (event.keyCode === 13) {
  //     onSearchHandler();
  //   }
  // }

  // const onChangeHandler = () => {
  //   var searchTerm = document.getElementById("search-box").value;
  //   setShowSuggestions(true);
  //   setQ(searchTerm);

  //   // use this prop if you want to make the search more reactive
  //   if (props.searchChangeHandler) {
  //     props.searchChangeHandler(searchTerm);
  //   }
  // }

  // useEffect(_ => {
  //   const timer = setTimeout(() => {
  //     const body = {
  //       q: q,
  //       top: 5,
  //       suggester: 'sg'
  //     };

  //     if (q === '') {
  //       setSuggestions([]);
  //     } else {
  //       axios.post('/api/suggest', body)
  //         .then(response => {
  //           console.log(JSON.stringify(response.data))
  //           setSuggestions(response.data.suggestions);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           setSuggestions([]);
  //         });
  //     }
  //   }, 300);
  //   return () => clearTimeout(timer);
  // }, [q, props]);

  // var suggestionDiv;
  // if (showSuggestions) {
  //   suggestionDiv = (<Suggestions suggestions={suggestions} suggestionClickHandler={(s) => suggestionClickHandler(s)}></Suggestions>);
  // } else {
  //   suggestionDiv = (<div></div>);
  // }

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
              <a className="nav-link" href="/search" style={{ fontSize: "20px", color: "white" }}>Search</a>
            </li>

          </ul>
        </div>
        <SearchBar postSearchHandler={navigateToSearchPage}></SearchBar>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className="uploadTag">
              <div className="uploadBtn" href="/uploadFile">UPLOADFILE</div>
            </div>
            
          </ul>
        </div> */}
        {/* <div > */}
        {/* <div className="input-group" onKeyDown={e => onEnterButton(e)}>
          <div className="suggestions" >
            <input
              autoComplete="off" // setting for browsers; not the app
              type="text"
              id="search-box"
              className="form-control rounded-0"
              placeholder="Search Products and Catalogs of your choices"
              onChange={onChangeHandler}
              defaultValue={props.q}
              onBlur={() => setShowSuggestions(false)}
              onClick={() => setShowSuggestions(true)}>
            </input>
            {suggestionDiv}
          </div>
          <div className="input-group-btn">
            <button className="btn btn-primary rounded-0" type="submit" onClick={() => onSearchHandler}>
              Search
            </button>
          </div>
        </div> */}
        <div style={{ margin: "0px 20px 0xp 0px" }}>
          <img src={sign_In} width={100} alt=''></img>
        </div>
        <div>
          <img src={return_Icon} width={70} alt=''></img>
        </div>
        <div>
          <img src={cart_Icon} width={70} alt=''></img>
        </div>
        {/* </div> */}
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
