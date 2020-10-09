import React from 'react';
import Home from "./pages/home/home.view";
import ListPins from './components/ListPins/ListPins.view'
import PinsForm from "./components/PinsForm/pinsform.view";
import BoardForm from "./components/BoardForm/BoardForm.view";
import Navbar from "./components/Navbar/navbar.view";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link, } from "react-router-dom";
import {LIST_PINS} from "./Routes/Routes";
import LoginForm from "./components/LoginForm/loginForm.view";
import RegisterForm from "./components/RegisterForm/RegisterForm.view";



function App() {
  return (


          <div className="App">
                <Navbar />
          </div>

  );
}

export default App;
