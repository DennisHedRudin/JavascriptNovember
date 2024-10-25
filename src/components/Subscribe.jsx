import React from 'react'

function Subscribe() {
  return (
    <>
    <div className="subscribe container">
            <div className="bell">
                <img src="/src/Image/icon/notification-icon-1.svg fill.svg" alt="yellow bell"/>
                <h2>Subscribe to our newsletter</h2>
            </div>
            <div className="input-group">                
                <input className="form-input email" type="email" placeholder="Your Email"/>
                <button className="btn-sub">Subscribe</button>
            </div>

        </div>
    </>
  )
}

export default Subscribe