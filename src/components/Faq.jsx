
import React, {useContext} from 'react'
import Questions from './Questions'
import { QuestionContext } from '../context/QuestionContext'
import { Link } from 'react-router-dom';



const Faq =() => {
  const { question } = useContext(QuestionContext);

  

  return (
    
    <div id="FAQ" className="container">
                <div className="info">
                    
                        <h2>Any questions? <br/>Check out the FAQs</h2>
                        <p className="text">Still have unanswered questions and need to get in touch?</p>
                    
                </div>
            

                 <div className="questions">
                                
                    {
                        question.map((item) => {                            
                            return (                        
                          <Questions key={item.id} question={item.title} answer={item.content}  />
                        )                           
                        })
                    }
                
                </div>

                <Link to="/Contact" className="btn-contact">
                    <button className="btn-primary">Contact us now</button>
                </Link>
                
                <div id="contact">                       
                           <div className="call">
                               <img src="/src/Image/icon/call.svg" alt="" className="icon-image" />
                               <p>Still have questions?</p>
                               <a  href="#" className="contact-call">
                                   <span className="contact-link">Contact us</span>
                                   <img src="/src/Image/icon/pil1.svg" alt="User" className="arrow"/>
                               </a>
                           </div>
                           <div className="message">
                               <img src="/src/Image/icon/message.svg" alt="" className="icon-image"/>
                               <p>Dont like phone calls?</p>
                               <a href="#" className="contact-mess">
                                   <span className="contact-link">Contact us</span>
                                   <img src="/src/Image/icon/pil2.svg" alt="User" className="arrow"/>
                               </a>
                           </div>                                                           
                     
                </div>
                        
                          
    </div>
            
        
    
  )
}

export default Faq