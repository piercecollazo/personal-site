import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Container, Col, Row} from 'react-bootstrap';
class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Navbar />
        <Main />
        
      </div>
      
    )
  }
}

export default App;
