import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Wall from './components/Wall/Wall';
import Quiz from './components/Quiz/Quiz';
import Login from './components/Login/Login';
import Photos from './components/Photos/Photos';
import Admin from './components/Admin/Admin';
import Splash from './components/Splash/Splash';

import './index.css';

function App() {
  const [ showNavFoot, setNavFoot ] = useState(true);

  return (
  <BrowserRouter>
    {   showNavFoot &&
    <Navigation />
    }
      <Routes>
        <Route path="/" exact element={<Splash funcNav={setNavFoot}/>} />
        <Route path="/wall" exact element={<Wall/>} />
        <Route path="/quiz" exact element={<Quiz/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/photos" exact element={<Photos/>} />
        <Route path="/admin" exact element={<Admin/>} />
      </Routes>
    {   showNavFoot &&
    <Footer />
    }
  </BrowserRouter>
  );

}

export default App;