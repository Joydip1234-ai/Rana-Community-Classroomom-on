import React from 'react'
import  {useState} from 'react'

export default function Build_search() {
   const list=[
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"


   ];

   const[filterList,setFilterList]=useState(list);
   const handleSearch=(event)=>{
   if(event.target.value=== ""){
     setFilterList(list);
    return;}

    const filteredValues=list.filter((item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1);
    setFilterList(filteredValues);
    
   }

  return (
    <div className="app">
 <div>
    Search:<input type="text" name="query" onChange={handleSearch}/>
 </div>
 {filterList && filterList.map((item,index)=>(

    <div key={index}>{item}</div>
))}



    </div>
  )
}
