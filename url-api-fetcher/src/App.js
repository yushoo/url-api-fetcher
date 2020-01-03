import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Button, Row, Col, Form, Input} from 'antd';
import ReactJson from 'react-json-view';
//import {Button, Container, Row, Col} from 'react-bootstrap';

//test api url
//  https://randomuser.me/api/
//  item.name.first

function App() {
  //state hook, count initialized to 0
  const [item, setItem] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl]   = useState('');
  
 
  //after fetch button has pressed, await for the api to send information
  // useEffect(async (url) => {
  //   const response = await fetch(url);
  //   //turn response into json format
  //   const data = await response.json();
  //   console.log(data);
  //   const item = data.results[0];
  //   setItem(item);
  // }, []);

  //makes to fetch api request
  const newFetch = async () => {
    const response = await fetch(url);
    const tData = await response.json();
    //const item = data.results[0];
    setData(tData);
    console.log(data);
    setItem(item);
  }

  //cant use generic function otherwise the function call will cause an infinite loop. 
  //use an event handler for a form
  const handleSubmit = (event) => {
    event.preventDefault();
    newFetch();
  }

  return (
   <div className="outerContainer" style={{ background: '#5cdbd3', padding: '30px' }}> 
       <Row Row type="flex" justify="space-between">
         <Col span={4}></Col>
         <Col span={4}>
              <h1 className="mainContent" id="mainTitle">Fetcher</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Item className="mainContent" id="fetchUrl" label="api url"  >
                  <p>( https://randomuser.me/api/ )</p>
                  <Input type="text" onChange={e => setUrl(e.target.value)} placeholder="https://randomuser.me/api/"></Input>
                  <div className="userInput">
                    <Button className="" id="fetchButton" htmlType="submit">fetch</Button>
                  <p className="">Data:</p>
                  </div>
                  
                </Form.Item>
              </Form>
         </Col>
         <Col span={4}></Col>
        </Row>
        <div className="dataOutput" style={{ }}>
                    {data && <div className="dataOutput"><ReactJson src={data}/></div>}
        </div>
   </div>
  );

}

export default App;
