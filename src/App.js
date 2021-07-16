import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
 render(){
  return (
    <div className="App">
      <Greet name='Ambica' likes='eating brain'/>
      <Greet name='Teju' likes='eating '/>
      <Greet name='Bhavya' likes='biscuts'/>


      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
 }
}

export default App;
