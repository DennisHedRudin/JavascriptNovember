import React, { useState, useEffect } from 'react'
import Review from './Review'
import axios from 'axios'


const Clients = () => {
  const [reviews, setReviews] = useState ([])

  const getDataUsingAxios = async () => {
    const res = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials')
    console.log(res.data);         
    setReviews(res.data)
}

useEffect(() => {        
  getDataUsingAxios()
},[])




  return (
    <div id="clients" >
                <div className="container love"> 
                    <div className="head-client">
                        <h1>Clients are Loving Our App</h1>
                        
                    </div>
                    
                    {
                        reviews.map((item) => {                            
                            return (                        
                          <Review key={item.id} rating={item.starRating} comment={item.comment} avatar={item.avatarUrl} author={item.author} role={item.jobRole} />
                        )                           
                        })
                    }

                </div>
    </div>
  )
}

export default Clients