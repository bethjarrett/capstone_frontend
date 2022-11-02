import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Wall from './components/Wall/Wall';
import Quiz from './components/Quiz/Quiz';
import Login from './components/Login/Login';
import Photos from './components/Photos/Photos';

import './index.css';

const App = () => (
  <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Wall/>} />
        <Route path="/quiz" exact element={<Quiz/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/photos" exact element={<Photos/>} />

      </Routes>
      <Footer />
  </BrowserRouter>
  );

export default App;
