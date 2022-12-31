import Navbar from './NavBar'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




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
            style={{border: '2px solid black', borderRadius: '10px', cursor:'pointer'}}
            onClick={ () =>
              fire(element.id)
            }
            variant="outline-dark" size='sm'>{element.Title}</h1>
          </>
        )
    }
  )
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
                    <p style={{whiteSpace:'pre-wrap'}}>{filteredblog.Blog}</p>
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
  

