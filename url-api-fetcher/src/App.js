import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Button, Row, Col} from 'antd';
//import {Button, Container, Row, Col} from 'react-bootstrap';

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

  //makes to fetch api request
  const newFetch = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const item = data.results[0];
    setItem(item);
  }

  return (
   <div> 
       <Row Row type="flex" justify="space-between">
         <Col span={4}></Col>
         <Col  span={4}>
                <h1>Fetcher</h1>
                <Button onClick={newFetch}>fetch</Button>
                <p>Data</p>
                {item && <div>{item.name.first}</div>}
         </Col>
         <Col span={4}></Col>
        </Row>
   </div>
  );

}

export default App;
