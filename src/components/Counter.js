import React from 'react'
import {useState} from 'react'

export default function Counter() {
    const[count, setCount]=useState(0);
  return (
    <div>
    
    <h1>Counter:{count}</h1>
    <ul>
        <li><button onClick={()=>setCount(count+1)}>Increase</button></li>
        <li><button onClick={()=>setCount(count-1)}>Decrease</button></li>

    </ul>
    </div>
  )
}
