import React from 'react'
import {useState} from 'react'
import './Accordion.css';

//export default function Accordion() {
  const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleAccordion = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };
  
  const AccordionList = () => {
    const accordionData = [
      { title: "Accordion Item 1", content: "Content for item 1" },
      { title: "Accordion Item 2", content: "Content for item 2" },
      { title: "Accordion Item 3", content: "Content for item 3" },
    ];
  
    return (
      <div className="accordion">
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };
  
  export default AccordionList;
  

