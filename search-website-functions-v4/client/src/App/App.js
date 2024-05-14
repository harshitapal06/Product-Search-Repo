import React, {useState, useEffect} from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import head from '../../src/images/head_Phone.png';
// Context for user authentication
import { AuthContext } from '../contexts/AuthContext';

// App shell components
import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';

// React Router page components
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Details from '../pages/Details/Details';

// Bootstrap styles, optionally with jQuery and Popper
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom app styles
import './App.css';
import UploadFile from '../components/UploadFile/UploadFile';

export default function App() {
  // React Hook: useState with a var name, set function, & default value
  const [user, setUser] = useState({});

  // Fetch authentication API & set user state
  async function fetchAuth() {
    const response = await fetch("/.auth/me");
    if (response) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        response.json()
          .then(response => setUser(response))
          .catch(error => console.error('Error:', error));
      }
    }
  }
  

  // React Hook: useEffect when component changes
  // Empty array ensure this only runs once on mount
  useEffect(() => {
    fetchAuth()
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <div className="container-fluid app">
        <Router>
        <AppHeader />
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/search`} element={<Search />} />
            <Route path={`/details/:id`} element={<Details />}/>
            <Route path={`*`} element={<Home />} />
            <Route path={`/uploadfile`} element={<UploadFile />} />
          </Routes>
        </Router>
        {<AppFooter />}
      </div>
    </AuthContext.Provider>
  );
}
