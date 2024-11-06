import React from 'react'
import StartContact from '../components/StartContact'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'
import BreadCrumb from '../components/BreadCrumb'

function Contact() {
  return (
    <div>    
        <BreadCrumb />
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