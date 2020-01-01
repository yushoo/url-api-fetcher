import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Container, Row, Col} from 'react-bootstrap';

function App() {
  //state hook, count initialized to 0
  //const [count, setCount] = useState(0);

  //after button has pressed, after rendering, update the count
  useEffect(() => {
    //document.title = `${count}`;
  });

  return (
   <div> 
     <Container>
       <Row className="justify-content-md-center mt-5">
         <Col></Col>
         <Col md="auto">
            <p>Fetcher</p>
            <Button>fetch</Button>
         </Col>
         <Col></Col>
        </Row>
     </Container>
   </div>
  );

}

export default App;
