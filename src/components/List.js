import React from 'react'
//import {useState} from 'react'

export default function List() {
    const list=['item1','item2','item3','item4','item51','item6']
    //const[list1,setList1]=useState(list);
    const listitem=list.map((item,index)=>(
        <li key={index}>{item}</li>
    ));
  return (
    <div>
        <h2>List of Items</h2>
        <ul>{listitem}</ul>




    </div>
  )
}
