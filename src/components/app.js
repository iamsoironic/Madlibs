import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import Home from "./component/home"


library.add(faDoorOpen);

export default class App extends Component {
  render() {
    return (
       <div className='app'>
         <div className="home-header">
            <h1>Mad Libs</h1>
         </div>
         <div className="button-wrapper">
            <a><FontAwesomeIcon  icon="door-open" /></a>
         </div>
         <div className="enter">
           Enter
         </div>
         <Home />
      </div>
    );
  }
}
