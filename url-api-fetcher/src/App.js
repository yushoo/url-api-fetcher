import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Container, Row, Col} from 'react-bootstrap';

function App() {
  //state hook, count initialized to 0
  //const [count, setCount] = useState(0);
  const [item, setItem] = useState(null);

  //after fetch button has pressed, await for the api to send information
  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/');
    //turn response into json format
    const data = await response.json();
    console.log(data);
    const item = data.results[0];
    setItem(item);
  }, []);

  return (
   <div> 
     <Container className="mt-5">
       <Row className="justify-content-md-center">
         <Col></Col>
         <Col className="justify-content-md-center">
            <h1>Fetcher</h1>
            <Button>fetch</Button>
            <p>Data</p>
            {item && <div>{item.name.first}</div>}
         </Col>
         <Col></Col>
        </Row>
     </Container>
   </div>
  );

}

export default App;
