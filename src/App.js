import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'


class App extends Component {
 render(){
  return (
    <div className="App">

      <FunctionClick />

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name='RajaniKanth' likes='The Great'></Greet> */}

      {/* <Greet name='Ambica' likes='eating brain'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Teju' likes='eating '>
        <button>Action</button>
      </Greet>
      <Greet name='Bhavya' likes='biscuts'/> */}

      {/* <Welcome name='Teju' likes='eating ' /> */}
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
