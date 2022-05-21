import React from "react";
import {Nav} from "react-bootstrap";
//import { withRouter } from "react-router";
//import {Router} from "react-router";
import './sidebar.css';

const Side = props => {
   

    return (
        <>
    
    <div class="wrapper">

    <nav id="sidebar">
        <div class="sidebar-header">
            <h3> EasyBizy</h3>
        </div>

        <ul class="list-unstyled components">
            <p>DTaaP</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Search</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Search By Type</a>
                    </li>
                    <li>
                        <a href="#">Search By Classification</a>
                    </li>
                    <li>
                        <a href="#">Search By Term</a>
                    </li>
                    <li>
                        <a href="#">Search By Text</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Classification</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Glossary</a>
            </li>
        </ul>
    </nav>

</div>
          
        </>
        );
  };
  //const Sidebar = Router(Side);
  export default Side;