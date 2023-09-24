import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router,Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    
    <div id="home">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shapes">Shapes</Link>
          </li>
          <li>
           <Link to="image">Image</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shapes" element={<Shapes />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </nav>
      
      
          
        

        
          
            
              
            
         
      
        
      
        
        
      
    </div>
      
  );
}
// export default App;