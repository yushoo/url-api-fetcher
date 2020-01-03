import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Button, Row, Col, Form, Input, Dropdown, Menu, Icon} from 'antd';
import ReactJson from 'react-json-view';
//import {Button, Container, Row, Col} from 'react-bootstrap';

//test api url
//  https://randomuser.me/api/
//  item.name.first

function App() {
  //state hook, count initialized to 0
  const [item, setItem]   = useState(null);
  const [data, setData]   = useState(null);
  const [url, setUrl]     = useState('');
  const [ref, setRef]     = useState(null);
  const [input, setInput] = useState('');
  
 
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
    //setItem(item);
  }

  //method to copy url from dropdown menu
  // const copy = (event,id) => {

  // }

  //cant use generic function otherwise the function call will cause an infinite loop. 
  //use an event handler for a form
  const handleSubmit = (event) => {
    event.preventDefault();
    newFetch();
  }

  const urls = ['https://randomuser.me/api/', 'https://api.thecatapi.com/v1/images/search', 'https://baconipsum.com/api/?type=meat-and-filler'];

  const menu = (
    <Menu className="dropDownElements">
       <Menu.Item>
         <p onClick={e =>setInput(urls[0])}>https://randomuser.me/api/</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={e =>setInput(urls[1])}>https://api.thecatapi.com/v1/images/search</p>
      </Menu.Item>
      <Menu.Item>
        <p onClick={e =>setInput(urls[2])}>https://baconipsum.com/api/?type=meat-and-filler</p>
      </Menu.Item>
    </Menu>
  );

  return (
   <div className="outerContainer" style={{ background: '#5cdbd3', padding: '30px' }}> 
       <Row Row type="flex" justify="space-between">
         <Col span={4}></Col>
         <Col span={4}>
              <h1 className="mainContent" id="mainTitle">Fetcher</h1>
              {/* <p>{input}</p> */}
              <div class="dropDown">
              <Dropdown overlay={menu} className="dropDown">
                <a className="ant-dropdown-link" href="#">
                  api url's <Icon type="down" />
                </a>
              </Dropdown>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Item className="mainContent" id="fetchUrl" label="api url"  >
                <Input 
                  type="text"
                  placeholder="https://randomuser.me/api/" 
                  type="text" 
                  value={input} 
                  onChange={e => setInput(e.target.value)}
                  ></Input>
                  <div className="userInput">
                    <Button className="" id="fetchButton" htmlType="submit" onClick={e => setUrl(input)}>fetch</Button>
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
