import React from 'react'

function Show() {
  return (

    <div id="show" className="container">
                
            <div className="banking">
                    <h2>Make your money transfer<br/> simple and clean</h2>
                    <ul>
                        <li><img src="/src/Image/icon/bx-check-circle.svg" alt="checkbox"/>Banking transactions are free for you</li>
                        <li><img src="/src/Image/icon/bx-check-circle.svg" alt="checkbox"/>No monthly cash commission</li>
                        <li><img src="/src/Image/icon/bx-check-circle.svg" alt="checkbox"/>Manage payments and transactions online</li>
                    </ul>

                        <div className="learn-btn">
                            <button href="#" className="learn-more">
                                <span>Learn more</span>
                                <img src="/src/Image/icon-r.svg" alt="Learn more"/>
                            </button>
                        </div>
                
            </div>

                <div className="img-graf">
                    <img src="/src/Image/Graf.svg" alt="Grapf"/>
                </div>
    </div>
    
  )
}

export default Show