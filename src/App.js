//import logo from './logo.svg';
import './App.css';
//import Build_search from './components/Build_search.js';
//import Counter from './components/Counter.js';
//import List from './components/List.js';
//import Accordion from './components/Accordion.js';
//import  './components/Accordion.css';
import React from 'react';
import ImageSlider from './components/ImageSlider.js';
import Checklist from './components/Checklist.js';


function App() {
  return (
    <div className="App">
      <h1 style={{color:"lightgreen"}}>React Image Builder</h1>
      {/*<Build_search/>*/}
      {/*<Counter/>*/}
      {/*<List/>*/}
      {/*<Accordion/>*/}
      {/*<ImageSlider/>*/}
      <Checklist/>
    </div>
  );
}

export default App;
