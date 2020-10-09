import React from 'react';
import list from './list.js';
import Place from './Place.jsx';
import './index.css';

function fun(obj)
{
    return(
      <Place  city={obj.city} country={obj.country}/>
       );
}

function App() {
  return (
    <>
    <h1>Holidays List</h1>
        <div className="list">
           <ol>{list.map(fun)}</ol>
        </div>
        </>
  );
}

export default App;
