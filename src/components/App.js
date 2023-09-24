import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router,Link, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    
    <div id="home">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            {/* Home*/}
          </li>
          <li>
            {/* Shapes*/}
          </li>
          <li>
           {/* Image*/}
          </li>
        </ul>
      </nav>
      
      
          
        

        
          
            
              
            
         
      
        
      
        
        
      
    </div>
      
  );
}
// export default App;