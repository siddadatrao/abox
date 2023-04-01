import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Stack from 'react-bootstrap/Stack'
import { useNavigate } from "react-router-dom";
import React, {Component} from 'react'

function App() {
    let navigate = useNavigate();
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1 style={{cursor:'pointer'}} onClick={ () =>navigate('/')}>a box</h1>
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
                <Button
                onClick={() => {
                    navigate('/blogpage/kavin');
                }}
                variant="outline-dark" size='sm'>Kavin</Button>
                <Button
                onClick={() => {
                    navigate('/blogpage/sri');
                }}
                variant="outline-dark" size='sm'>Sri</Button>
            </Stack>
            </Stack>
        </>
    );
  }
  
  export default App;

