import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./sidebar.js";
import './sidebar.css';
//import ComingSoon from './coming_soon';
import BasicSearch from './basic_search';


const Home = props => {
   

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={4} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col id="page-content-wrapper">
                        <BasicSearch/>
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  export default Home;