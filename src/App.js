import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Contact />
        
      </div>
      
    )
  }
}

export default App;
