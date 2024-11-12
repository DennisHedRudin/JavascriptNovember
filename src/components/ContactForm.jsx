import React, { useState } from 'react'
import axios from 'axios'

const  ContactForm = () => {

    const [formData, setFormData] = useState ({fullName: '', email: '', specialist: ''})
    const [errors, setErrors] = useState ({})
    const [submitted, setSubmitted] = useState(false);

    const validateField = (name, value) => {
      let error = '';

      if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
        error = "Must be at least 2 characters long, no numbers"
      } else if (name === 'email' &&!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
        error = "Must be an valid Email (eg. username@example.com)"
      } 


      setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }


    const validateForm = () => {
      const newErrors = {}

      if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
        newErrors.fullName = "Must be at least 2 characters long, no numbers"
        }
        
      if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
        newErrors.email = "Must be an valid Email (eg. username@example.com)"
        }  
        
      if (!formData.specialist) {
        newErrors.specialist = 'Please select a specialist';
      }


        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }







    const handleChange = (e) => {
      const { name, value} = e.target
      setFormData({...formData, [name]: value})
      validateField(name, value)

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
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `${field} field is required`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        if (!validateForm()) {
          console.log('form Invalid')
          return;
        } 
       
        
        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData)
      

      console.log(res.status)

      if (res.status !== 200) {
        console.log(res.data)
      } else {
        setSubmitted(true)
        setFormData({fullName: '', email: '', specialist: ''})
      }

    }

    if (submitted) {
        return (
            <div className="reg-box">
              <div className="conf-box">
                <h2>Thank you for contacting us!</h2>
                <p>We'll come back to you as soon as possible.</p>
                <button className='btn-primary' onClick={handleOk}>OK</button>

              </div>

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
               <span className="error">{errors.fullName && errors.fullName}</span>                    
        </div>
            
        <div className="contact-input-group"> 
                <label htmlFor="email" className="formLabel">Email address</label>
                <input type="email" id="email-input" className="contact-form-input" name="email" value={formData.email} onChange={handleChange} required/>
                <span className="error">{errors.email && errors.email}</span>                       
                
        </div>
            
        <div className="contact-input-group"> 
          <label htmlFor="Specialist" className="formLabel" >Specialist</label>
            <select className="contact-form-input" name="specialist" value={formData.specialist} id="dropdown" onChange={handleChange} required>
              <option value=""></option>
              <option value="option1">IT</option>
              <option value="option2">Economy</option>
              <option value="option3">Construction</option>
            </select>
            <span className="error">{errors.specialist && errors.specialist}</span>
                              

          </div>

        <button type="submit" className="btn-primary submit">Make an appointment</button>

    </form>

</div>
  )

}
export default ContactForm