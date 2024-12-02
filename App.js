import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Robot from './Components/Robot';
import Unsubscribe from './Components/Unsubscribe';
import DOB from './Components/DOB';
import { Hint1, Hint2 } from './Components/Hints';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/robot" element = {<Robot/>}/>
            <Route path = "/dob" element = {<DOB/>}/>
            <Route path = "/unsubscribe" element = {<Unsubscribe/>}/>
            <Route path = "/hint1" element = {<Hint1/>}/>
            <Route path = "/hint2" element = {<Hint2/>}/>
        </Routes>
    </Router>
  );
};

export default App;
