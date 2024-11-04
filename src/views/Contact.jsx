import React from 'react'
import Home from '../components/Home'
import StartContact from '../components/StartContact'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'

function Contact() {
  return (
    <div>    
        <Home />
        <section id="start-contact">
             <div className="container">
                <StartContact />
                <ContactForm />
             </div>
        </section>
        <Location />
        
    </div>
  )
}

export default Contact