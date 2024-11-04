
import React, {useState, useEffect} from 'react'
import Questions from './Questions'
import axios from 'axios'


const Faq =() => {
    const [question, setQuestion] = useState([])
    
   

    const getDataUsingAxios = async () => {
        const res = await axios.get('https://win24-assignment.azurewebsites.net/api/faq')
        console.log(res.data);         
        setQuestion(res.data)
    }



    useEffect(() => {        
        getDataUsingAxios()
    },[])


  

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

                <div className="btn-contact">
                    <button className="btn-primary">Contact us now</button>
                </div>
                
                <div id="contact">                       
                           <div className="call">
                               <img src="/src/Image/icon/call.svg" alt=""/>
                               <p>Still have questions?</p>
                               <a  href="#" className="contact-call">
                                   <span>Contact us</span>
                                   <img src="/src/Image/icon/pil1.svg" alt="User" className="arrow"/>
                               </a>
                           </div>
                           <div className="message">
                               <img src="/src/Image/icon/message.svg" alt=""/>
                               <p>Dont like phone calls?</p>
                               <a href="#" className="contact-mess">
                                   <span>Contact us</span>
                                   <img src="/src/Image/icon/pil2.svg" alt="User" className="arrow"/>
                               </a>
                           </div>                                                           
                     
                </div>
                        
                          
    </div>
            
        
    
  )
}

export default Faq