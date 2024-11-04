import React, { useState } from 'react'
import axios from 'axios'

const  ContactForm = () => {

    const [formData, setFormData] = useState ({fullName: '', email: '', specialist: ''})
    const [errors, setErrors] = useState ({})
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      const { name, value} = e.target
      setFormData({...formData, [name]: value})

      if (value.trim() === '') {
        setErrors(prevErrors => ({...prevErrors, [name]: `${name} field is required`}))
      } else {
        setErrors(prevErrors => ({...prevErrors, [name]: ''}))
      }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
       
        const newErrors = {}
        Object.keys(formData).forEach(field=> {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData)
      

      console.log(res.status)

      if (!res.status === 200) {
        console.log(res.data)
      } else {
        setSubmitted(true)
        setFormData({fullName: '', email: '', specialist: ''})
      }

    }

    if (submitted) {
        return (
            <div className="reg-box">
                <h1>Tack för din ansökan!</h1>
                <p>Vi återkommer till dig så snart vi kan.</p>
                <button className='btn-primary' onClick={handleOk}>OK</button>

            </div>
        )
    }


  return (
    <div className="reg-box">
    <form id="regForm" className="reg-form" onSubmit={handleSubmit} noValidate>

        <h1>Get Online Consultation</h1>

        <div className="contact-input-group"> 
               <label htmlFor="fullName" className="formLabel">Full Name</label>
               <input type="text" id="fullName" className="contact-form-input" name="fullName" value={formData.fullName} onChange={handleChange} required/>
               <span className="error">{errors.name && errors.name}</span>                    
        </div>
            
        <div className="contact-input-group"> 
                <label htmlFor="email" className="formLabel">Email address</label>
                <input type="email" id="email-input" className="contact-form-input" name="email" value={formData.email} onChange={handleChange} required/>
                <span className="error">{errors.email && errors.email}</span>                       
                
        </div>
            
        <div className="contact-input-group"> 
            <label htmlFor="Specialist" className="formLabel">Specialist</label>
            <input type="text" id="specialist" className="contact-form-input" name="specialist" value={formData.specialist} onChange={handleChange} required/>
            <span className="error">{errors.specialist && errors.specialist}</span>                 

        </div>

        <button type="submit" className="btn-primary submit">Make an appointment</button>

    </form>

</div>
  )

}
export default ContactForm