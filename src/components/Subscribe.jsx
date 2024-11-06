import React, {useState} from 'react'
import axios from 'axios'

const Subscribe = () => {
  const [formData, setFormData] = useState({email: ''});
  const [errors, setErrors] = useState ({})
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = ''

    if (name === 'email' &&!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
        error = "Must be an valid Email (eg. username@example.com)"
  }

  setErrors(prevErrors => ({...prevErrors, [name]: error}))
}

const validateForm = () => {
  const newErrors = {}

  if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
    newErrors.email = "Must be an valid Email"
    }

    setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
}

  const handleInputChange = (e) => {
    const {name, value} = e.target;   
    setFormData({...formData, [name]: value });
    validateField(name, value)

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `${name} field is required`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }  
  };

  const handleOk = () => {
    setSubmitted(false)
}

  const handleSubmit = async (e) => {
    e.preventDefault();    

    const newErrors = {}
        Object.keys(formData).forEach(field=> {
            if (formData[field].trim() === '') {
                newErrors[field] = `Email is required`
            }
        })

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors)
          return
        }

        if (validateForm()) {
          console.log('form valid')
        } 
        else {
          console.log('form Invalid')
        }
    
      const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', formData)
      

      console.log(res.status)

      if (res.status === 200) {
        setSubmitted(true)
        setFormData({email: ''});
      } else {
        console.log(res.data)
        
      }  
   
  }

  if (submitted) {
    return (
        <div className="subscribe container">
          <div className="bell">
            <img src="/src/Image/icon/notification-icon-1.svg fill.svg" alt="yellow bell"/>
            <h2>Thanks for subscribing!</h2>
            <button className="btn-primary return" onClick={handleOk}>Return</button>
        </div>
        <div>
          <h3></h3>
        </div>

        </div>
    )
}

  return (
    
    <div className="subscribe container" >
      
        <div className="bell">
            <img src="/src/Image/icon/notification-icon-1.svg fill.svg" alt="yellow bell"/>
            <h2>Subscribe to our newsletter</h2>
        </div>
        <form className="input-group" onSubmit={handleSubmit} noValidate>                
            <input className="form-input email" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleInputChange}/>
            <button className="btn-sub">Subscribe</button>
        </form>
        <span className="error">{errors.email && errors.email}</span>  
       

      

    </div>
    
  )
}

export default Subscribe