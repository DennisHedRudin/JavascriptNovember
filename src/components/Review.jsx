import React from 'react'
import Stars4 from '../Image/Rev/rating.Svg'
import Stars5 from '../Image/Rev/rating5.Svg'
import Quotes from '/src/Image/Rev/quotes.svg'

const Review = ({ author, rating, comment, avatar, role}) => {
    
    const ratingImages = {
      4: Stars4,
      5: Stars5,
    };
    
    const ratingImage = ratingImages[rating];

  return (
    <div className="ref-box">
            <img className="quote" src={Quotes} alt="Quote symbol"/>
            <div>
             <div>
                <img src={ratingImage} alt="rating" className="rating" />
             </div>
             <p>{comment}</p>

                <div className="author-box">
                    <img src={avatar} alt="icon" />
                    <div className="author">
                        <h6>{author}</h6>
                        <p>{role}</p>
                    </div>
                </div>
            </div>           
            
                        
    </div>
  )
}

export default Review