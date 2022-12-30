import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Stack from 'react-bootstrap/Stack'
import b1 from './b1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


const site_title = {
    name: 'abox',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 500,
  };
  
  export default function Home() {
    let navigate = useNavigate();
    return (
      <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1>a box</h1>
        </div>
        <Stack gap={5}>
          
          <Stack direction="horizontal" gap={3} style={{justifyContent: 'center'}}>
            <Button 
              onClick={() => {
                navigate('/blogpage/kaushik');
              }}
              variant="outline-dark" size='sm'>Kaushik</Button>
            <Button
              onClick={() => {
                navigate('/blogpage/sidd');
              }}
              variant="outline-dark" size='sm'>Sidd</Button>
          </Stack>
        </Stack>
        <div className='mt-5'>
          <Container>
            <Row>
              
              <Col sm={6}>
                <h3>today's picture of a box</h3>
                <img src={b1} 
                  style={{
                    width: '100%'
                  }}/>

              </Col>
              
              <Col sm={6}>
                <h3 > a new gland was found</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              </Col>

            </Row>
          </Container>
        </div>
      </>
    );
  }

  