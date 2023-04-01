import Navbar from './NavBar'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tweet } from 'react-twitter-widgets'

export default function Blogpage({bdata}) {
  
  const [selectedVal, setSelectedVal] = useState(0)

  const [isBlogSelected, setIsSelected] = useState(false);

  // const toggleIsLoading = () => {
  //   // 👇️ passed function to setState
  //   setIsSelected(current => !current);
  // };

  function fire(id) {
    setIsSelected(!isBlogSelected)
    setSelectedVal(id)
  }

  const listItemsClose = bdata.map(
    (element) => {
        return (
          <>
            <h1 className='hover-overlay'
            style={{paddingRight: 10, paddingLeft: 10, border: '2px solid black', borderRadius: '10px', cursor:'pointer'}}
            onClick={ () =>
              fire(element.id)
            }
            variant="outline-dark" size='sm'>{element.Title}</h1>
          </>
        )
    }
  )

  const RenderInfo = ({type, info, references}) => {
    if (type === "blog") {
      return (
        <p style={{paddingLeft: 10, paddingRight: 10, whiteSpace:'pre-wrap', border: '2px solid black', borderRadius: '10px'}}>{info}</p>
      )
    } else if (type === "audio") {
      return (
        <>
          <img src={require("./resources/eye.jpg")} 
                    style={{
                      paddingRight: 10, paddingTop: 10, paddingBottom: 10,paddingLeft: 10, width: '50%', alignItems: 'center', justifyContent:'center'
                    }}/>
          <audio src={require("./flowstate.m4a")} controls/> 
        </>
      )
    }
  }

  return (
    <>
        <Navbar />
        <Container>
          <Row>
            <Col xs={2}></Col>
            <Col md="auto">
              <div style={{marginRight: 0, marginLeft: 0}}>
                {isBlogSelected && <Button  onClick={ () =>
              fire(0)} 
              variant="outline-dark">Back</Button>}
                {isBlogSelected && bdata.filter(bdata => bdata.id === selectedVal).map(filteredblog => (
                  <>
                    <h1>{filteredblog.Title}</h1>
                    <RenderInfo type={filteredblog.type} info={filteredblog.Blog} references={filteredblog.references} />
                  </>
                ))}
              </div>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
        <div style={{padding:20, display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          {!isBlogSelected && listItemsClose}
        </div>
      </>
    );
  }
  

