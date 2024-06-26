import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions/Suggestions';
// import search_Icon from '../../images/amazon_search.png';

import "./SearchBar.css";

export default function SearchBar(props) {

    let [q, setQ] = useState("");
    let [suggestions, setSuggestions] = useState([]);
    let [showSuggestions, setShowSuggestions] = useState(false);

    const onSearchHandler = () => {
        props.postSearchHandler(q);
        setShowSuggestions(false);
    }

    const suggestionClickHandler = (s) => {
        document.getElementById("search-box").value = s;
        setShowSuggestions(false);
        props.postSearchHandler(s);
    }

    const onEnterButton = (event) => {
        if (event.keyCode === 13) {
            onSearchHandler();
        }
    }

    const onChangeHandler = () => {
        var searchTerm = document.getElementById("search-box").value;
        setShowSuggestions(true);
        setQ(searchTerm);

        // use this prop if you want to make the search more reactive
        if (props.searchChangeHandler) {
            props.searchChangeHandler(searchTerm);
        }
    }

    useEffect(_ => {
        const timer = setTimeout(() => {
            const body = {
                q: q,
                top: 5,
                suggester: 'sg'
            };

            if (q === '') {
                setSuggestions([]);
            } else {
                axios.post('/api/suggest', body)
                    .then(response => {
                        console.log(JSON.stringify(response.data))
                        setSuggestions(response.data.suggestions);
                    })
                    .catch(error => {
                        console.log(error);
                        setSuggestions([]);
                    });
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [q, props]);

    var suggestionDiv;
    if (showSuggestions) {
        suggestionDiv = (<Suggestions suggestions={suggestions} suggestionClickHandler={(s) => suggestionClickHandler(s)}></Suggestions>);
    } else {
        suggestionDiv = (<div></div>);
    }

    return (
        <div style={{width:"74%"}}>
            <div className="input-group" onKeyDown={e => onEnterButton(e)}>
                <div className="suggestions" >
                    <input
                        autoComplete="off" // setting for browsers; not the app
                        type="text"
                        id="search-box"
                        className="form-control rounded-0"
                        // placeholder="Search Products and Catalogs of your choices"
                        placeholder="Find products, invoices and catalogs"
                        onChange={onChangeHandler}
                        defaultValue={props.q}
                        onBlur={() => setShowSuggestions(false)}
                        onClick={() => setShowSuggestions(true)}>
                    </input>
                    {suggestionDiv}
                </div>
                <div className="input-group-btn">
                    <button className="btn btn-primary rounded-0" type="submit" onClick={onSearchHandler}>
                        Search
                    </button>
                </div>
                {/* <div onClick={onSearchHandler} style={{ cursor: 'pointer' }}>
                    <button > 
                        <img src={search_Icon} width={50} height={37} alt="Search"></img>
                    </button>
                </div> */}
            </div>
        </div>
    );
};