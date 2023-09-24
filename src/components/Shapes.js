import React from 'react'
import "../styles/Shapes.css";
import { Link, useLocation } from 'react-router-dom'

  
 export default function Shapes() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const shape = query.get('shape');
  const color = query.get('color');
   
    
  
    // <Home />
    return (
      <div id='shapesdiv'>
        
          <h2>Shapes</h2>
          <ul className="navbar-shapes">
          <li>
            <Link to="/shapes?shape=square&color=Blue">Blue Square</Link>
          </li>
          <li>
            <Link to="/shapes?shape=square&color=Red">Red Square</Link>
          </li>
          <li>
            <Link to="/shapes?shape=circle&color=Blue">Blue Circle</Link>
          </li>
          <li>
            <Link to="/shapes?shape=circle&color=Red">Red Circle</Link>
          </li>
        </ul>

        <Child shape={shape} color={color} />

      </div>
    );
  }
//   DO NOT touch CHILD function
  function Child({ shape,color }) {
    
    if (shape === "circle"){
        return (
          <div id ="circle"className = "divcircle" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      }
      else if (shape === "square"){
        return (
          <div id ="square"className = "divsquare" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      } 
      else return(
        <div id = "empty"className="empty"></div>
      )
      
  }

// export default Shapes
