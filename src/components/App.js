import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AtbashDecoder from './AtbashDecoder';
import OneTimePadCipher from './OneTimePadCipher';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/atbash" element={<AtbashDecoder/>} />
        <Route path="/one-time-pad" element={<OneTimePadCipher/>} />
      </Routes>
    </Router>
  );
};

export default App;
