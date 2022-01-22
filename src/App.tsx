import React from 'react';
import './App.css';
import FetchLocation from './components/FetchLocation';


const App = () => {

  return (
  <div className='App'>
    <div className='main'>
      <h1>Your Local Weather</h1>
      <FetchLocation />
    </div>
  </div>
  )
};

export default App;