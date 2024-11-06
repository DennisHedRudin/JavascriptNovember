
import React from 'react'

 
 function StartContact() {
  

  return (          
                <div className="hero">
        
                    <div className="contact-hero">
                        <h1 className="h-contact">Contact Us</h1>
                        <div className="meet">
                            <div id="message" className="contact-square">
                                <div className="circle-img">
                                    <img className="icons" src="/src/Image/icon/envelope-p.svg" alt=""/>
                                </div>
                                <div className="content">
                                    <h4>Email Us</h4>
                                    <p>Please feel free to drop us a line. We will<br/>
                                        respond as soon as possible.</p>
                                    <a href="#" className="contact-mess">
                                        <span>Leave a message</span>
                                        <img src="/src/Image/icon/pil1.svg" alt="User" className="arrow-contact"/>
                                    </a>
                                </div>
                            </div>
                            <div id="carrers" className="contact-square">
                                <div className="circle-img">
                                    <img className="icons" src="/src/Image/icon/add-group.svg" alt=""/>
                                </div>
                                <div className="content">
                                    <h4>Careers</h4>
                                    <p>Sit ac ipsum leo lorem magna nunc mattis <br/>
                                         maecenas non vestibulum.</p>
                                    <a href="#" className="contact-mess">
                                        <span>Send an application</span>
                                        <img src="/src/Image/icon/pil1.svg" alt="User" className="arrow-contact"/>
                                    </a>
                                </div>
                                    
                            </div>
                            
                        </div>
                        
                    </div>
                </div>              
               
    
            
    
        
  )
}

export default StartContact