import React, { useState } from 'react';

const Questions = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false); 

  const toggleAnswer = () => {
    setIsOpen(!isOpen); 
  };

  return (        
    <div className={`faq-card ${isOpen ? 'open': ''}`}>

                    <div className="qa" onClick={toggleAnswer} >
                                <h4>{question}</h4>
                                {!isOpen && (
                                <a className="btn-discover">
                            <span  className="btn-question">
                                <img className="light-vector" src="/src/Image/Vector2.svg"/>
                                <img className="dark-vector" src="/src/Image/Dark/Vector dark.svg"/>
                                </span>                                     
                        </a>
                                )} 
                        {isOpen && (
                        <a className="btn-open">
                            <span className="btn-answer">
                                <img src="/src/Image/Vector upp.svg"/>
                            </span>                                      
                        </a>  

                        )}
                    </div> 

                    {isOpen && (
                    <div className="answr">                        
                           <p>{answer}</p>                   
                                               
                    </div>     

                    )}                        
    </div>
  )
}

export default Questions