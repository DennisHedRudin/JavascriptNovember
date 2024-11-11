import React from 'react'

function Hero() {
  return (
    <>
    <section id="start">
            
            <div className="container">

                <div className="headline">
                    <h1>Manage All Your Money In One App</h1>
                </div>
                
                <div className="content">

                    <p className="text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>

                                <div id="app-center">

                                    <div id="light-app" className="app-link">                                        
                                        <a className="btn-app" href="https://www.apple.com/se/app-store/" target="_blank">
                                            <img src="/src/Image/appstore/Group.svg" alt="Appstore"/>
                                        </a>
                                        <a className="btn-app" href="https://play.google.com/store/apps?hl=sv" target="_blank">
                                            <img src="/src/Image/appstore/Google play.svg" alt="Google play"/>
                                        </a>
                                    </div>
        
                                    <div id="dark-app" className="app-link-dark">
                                        <a className="btn-app-dark" href="https://www.apple.com/se/app-store/" target="_blank">
                                            <img src="/src/Image/Dark/Group (1).svg" alt="Appstore"/>
                                        </a>
                                        <a className="btn-app-dark" href="https://play.google.com/store/apps?hl=sv" target="_blank">
                                            <img src="/src/Image/Dark/Google dark.svg" alt="googleplay"/>
                                        </a>
        
                                    </div>
    
                                </div>
                        
                                <a href="#how" className="btn-discover">
                                    <span className="btn-circle">
                                        <img className="light-vector" src="/src/Image/Vector2.svg"/>
                                        <img className="dark-vector" src="/src/Image/Dark/Vector dark.svg"/>
                                    </span>
                                    <span>Discover more</span>              
                                </a>          


                </div>
                
                <div className="img-start">
                    <img className="img-back" src="/src/Image/Iphone/iPhone-mybudget_desktop.svg" alt="iphone my budget"/>
                    <img className="img-front" src="/src/Image/Iphone/iPhoneyourcards_desktop.svg" alt="iphone your cards"/>

                </div>
                
                
        
            </div>
        </section>
        </>
  )
}

export default Hero