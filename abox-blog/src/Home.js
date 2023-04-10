import "bootstrap/dist/css/bootstrap.min.css"
import b1 from './resources/pool.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Navbar from './NavBar'
import React, {Component} from 'react'


const site_title = {
    name: 'abox',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 500,
  };
  
  export default function Home(props) {
    let navigate = useNavigate();
    let checklist = ["Japan house","Massage","Riggs","Barrelhouse","Blind pig (trivia)","Sipyard","Downtown restaurants","Naya Indian","Laser tag/Paintball","Altgeld Underground Library","Rooftop Foellinger","CRCE hot tub","Tunnels","Illini Inn","Red Herring","Xinh xinh","Pub Cycle","Strip Club","The Literary"]
    let checklist_done = []
    return (
      <>
        <Navbar />
        <div className='mt-5'>
          <Container>          
          <Row>
              
              <Col sm={6}>
                <h3>today's picture of a box</h3>
                <img src={b1} 
                  style={{
                    paddingRight: 10, paddingTop: 10, paddingBottom: 10,paddingLeft: 10, border: '2px solid black', borderRadius: '10px',
                    width: '100%'
                  }}/>
              </Col>
              
              <Col sm={6}>
                  <>
                    <h1>featured blog</h1>
                    <h3>{props.title}</h3>
                    <p style={{whiteSpace:'pre-wrap', paddingRight: 10, paddingTop: 10, paddingBottom: 10,paddingLeft: 10, border: '2px solid black', borderRadius: '10px'}}>{props.blog}</p>
                  </>
                  <Row sm={2}>
                    <>
                      
                      <div style={{whiteSpace:'pre-wrap', paddingRight: 10, paddingTop: 10, paddingBottom: 10,paddingLeft: 10, border: '2px solid black', borderRadius: '10px'}}>
                          <h3>do</h3>
                          <div style={{display:'flex',flexDirection:'column'}}>
                            {checklist.map( e => <span>{e}</span>)}
                          </div>
                      </div>
                      <div style={{whiteSpace:'pre-wrap', paddingRight: 10, paddingTop: 10, paddingBottom: 10,paddingLeft: 10, border: '2px solid black', borderRadius: '10px'}}>
                          <h3>done</h3>
                          <div style={{display:'flex',flexDirection:'column'}}>
                            {checklist_done.map( e => <span>{e}</span>)}
                          </div>
                      </div>
                    </>
                  </Row>
              </Col>
            </Row>
            
          </Container>
        </div>
      </>
    );
  }

  