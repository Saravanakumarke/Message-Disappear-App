import Message from './Components/Message'
import Main from './Components/Main'
import './App.css';
import {BrowserRouter as Router , Route,  Switch} from 'react-router-dom';
import { useState } from 'react';

function App() {
 const [value,setValue] = useState("")
 
  return (
    <Router>
    <div className="App" >

<Route path="/" exact component={Message} ></Route>
<Route path="/main" component={Main}  ></Route>


    </div>
    </Router> 
  );
}

export default App;
