
import React from "react";
//import {Panel} from 'react-bootstrap';
//import a from '../assets/img/coming_soon.svg'
import { Card } from 'react-bootstrap'
  
export default function BasicSearch() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
 
      
      <input type="text" placeholder="Search entities .." className="serch-input-box" name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>

      <div className="card-panel">
      <Card>
          <Card.Body>
            <h2>Basic Search</h2>
            <p>Search Atlas for existing entities or <a href='#'> Create new entity</a></p>

          </Card.Body>
      </Card>
</div>


   
    </div>
  );
}
