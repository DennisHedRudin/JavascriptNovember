import React from 'react'

function Location() {
  return (
    <section id="location" className="container">
            <div className="maps">
                <img src="/src/Image/maps.svg" alt="map"/>
            </div>

            <div className="map-info container">
                <div className="adress">
                    <div id="medical-center1" className="medical">                    
                                   
                        <h4>Medical center 1</h4>
                        <ul>
                            <li><img src="/src/Image/icon/place.svg" alt="checkbox" />4517 Washington Ave. Manchester, Kentucky 39495</li>
                            <li className="middle"><img src="/src/Image/icon/Phone.svg" alt="checkbox" />(406) 555-0120</li>
                            <li><img src="/src/Image/icon/Clock.svg" alt="checkbox" /><span highlight>Mon – Fri:</span> 9:00 am – 22:00 am</li>
                            <li className="weekend"><span highlight>Sat – Sun:</span> 9:00 am – 20:00 am</li>
                        </ul>

                    </div>
                    <div className="medical">
                        <h4>Medical center 2</h4>
                        <ul>
                            <li><img src="/src/Image/icon/place.svg" alt="checkbox"/>2464 Royal Ln. Mesa,New Jersey 45463</li>
                            <li className="middle"><img src="/src/Image/icon/Phone.svg" alt="checkbox"/>(406) 544-0123</li>
                            <li><img src="/src/Image/icon/Clock.svg" alt="checkbox"/><span highlight>Mon – Fri:</span> 9:00 am – 22:00 am</li>
                            <li className="weekend"><span highlight>Sat – Sun:</span> 9:00 am – 20:00 am</li>
                        </ul>
    
                    </div>

                </div>
                <div className="socials container">
                    <div id="facebook" className="social-box">
                        <img src="/src/Image/Social/Facebook.svg" alt="Facebook" className="social"/>

                    </div>
                    <div id="twitter" className="social-box">
                        <img src="/src/Image/Social/Twitter.svg" alt="Twitter" className="social"/>

                    </div>
                    <div id="instagram" className="social-box">
                        <img src="/src/Image/Social/Instagram.svg" alt="Instagram" className="social"/>

                    </div>
                    <div id="youtube" className="social-box">
                        <img src="/src/Image/Social/youtube.svg" alt="Youtube" className="social"/>

                    </div>
                </div>
            </div>
        </section>
  )
}

export default Location