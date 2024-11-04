import React from 'react'
import Stars4 from '../Image/Rev/rating.Svg'
import Stars5 from '../Image/Rev/rating5.Svg'

const Review = ({ author, rating, comment, avatar, role}) => {
    
    let images = [];
    images[4] = Stars4;
    images[5] = Stars5;


  return (
    <div className="ref-box">
            <img className="quote" src="/src/Image/Rev/quotes.svg" alt="Quotes"/>
            <div>
             <div>
                <img src={images[{rating}]} alt="rating" />
             </div>
             <p>{comment}</p>

                <div className="author-box">
                    <img src={avatar} alt="icon" />
                    <div className="author">
                        <h3>{author}</h3>
                        <p>{role}</p>
                    </div>
                </div>
            </div>           
            
                        
    </div>
  )
}

export default Review