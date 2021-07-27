import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.modules.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

import Focusinput from './components/Focusinput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';



class App extends Component {
 render(){
  return (
    <div className="App">
        
        {/* <UserProvider value="RajaniKanth"> */}
          <ComponentC />
        {/* </UserProvider> */}
        
        {/* <Counter1>
          {(count,incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        </Counter1>
        
        <Counter1>
         {(count,incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
        </Counter1> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'RajaniKanth2' : 'Guest'} /> */}
        
        {/* <HoverCounter name='RajaniKanth' />
        <ClickCounter />     */}
        
        
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}       
      

      {/* <PortalDemo /> */}      
      {/* <Focusinput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}

      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}

      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Inline /> */}
      {/* <Stylesheets primary={true}/> */}
      
      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}
      {/* <ClassClick /> */}

      {/* <FunctionClick /> */}

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
