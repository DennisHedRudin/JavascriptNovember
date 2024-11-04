import React, {useState} from 'react'
import axios from 'axios'

const Subscribe = () => {
  const [formData, setFormData] = useState({email: ''});
  const [errors, setErrors] = useState ({})
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const {name, value} = e.target;   
    setFormData({...formData, [name]: value });

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `${name} field is required`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }  
  };

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
    
      const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', formData)
      

      console.log(res.status)

      if (!res.status !== 200) {
        console.log(res.data)
      } else {
        setSubmitted(true)
        setFormData({email: ''})
      }   

   
  };

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
        {/* <span className="success">{done.email && done.email}</span>   */}

      

    </div>
    
  )
}

export default Subscribe