import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  // trickle down economics...I mean state
  // set state
  const [adopt, setAdopt] = useState([]);
  const removeFromDOM = ID => {
    setAdopt(adopt.filter(pets => pets._id !== ID))
  }
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/"/>
        <New path="/pets/new"/> 
        <Show path="/pets/:_id" removeFromDOM={removeFromDOM} />
        <Edit path="/pets/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
