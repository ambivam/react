import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

class App extends Component {
 render(){
  return (
    <div className="App">

    <Message />

      {/* <Greet name='Ambica' likes='eating brain'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Teju' likes='eating '>
        <button>Action</button>
      </Greet>
      <Greet name='Bhavya' likes='biscuts'/> */}

      {/* Using class components */}
      {/* <Welcome name='Ambica' likes='eating brain'>
        <p>This is children props</p>
      </Welcome> 
      <Welcome name='Teju' likes='eating ' />
      <Welcome name='Bhavya' likes='biscuts' />
      <Hello /> */}
    </div>
  );
 }
}

export default App;
