import React from 'react';
import './App.scss';
import CardLocal from './components/cardLocal';
import CardGlobal from './components/cardGlobal';

function App() {
  return (
    <div className="App">
      <CardLocal />
      <CardGlobal />
    </div>
  );
}

export default App;
