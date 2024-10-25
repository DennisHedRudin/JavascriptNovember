import React from 'react'

function Features() {
  return (
    <>
    <div className="container">

        <article id="features" > 


            <div className="img-card">
                <img className="iphone" src="/src/Image/Iphone/Iphone-card.svg" alt="Iphone 12 credit card"/>
            </div>

            <div className="app-f">

            <div className="f1">
                <h2>App Features</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab sunt expedita quaerat odio
                    placeat nostrum accusamus temporibus mollitia accusantium asperiores, impedit eos omnis aliquid.</p>
            </div>

                <div className="service">

                <div className="s-card">
                    <img src="/src/Image/Mini/Vector.svg" alt="Credit Card" className="img-s"/>
                    <div>
                        <h4>Easy Payments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ut!</p>
                    </div>
                </div>

                <div className="s-card">
                    <img src="/src/Image/Mini/shield.svg" alt="Shield" className="img-s"/>
                    <div>
                        <h4>Data Security</h4>
                        <p className="text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, saepe.</p>
                    </div>
                </div>
                
                <div className="s-card">
                    <img src="/src/Image/Mini/bars-graphic.svg" alt="bars graphic" className="img-s"/>
                    <div>
                        <h4>Cost Statitics</h4>
                        <p className="text-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, alias.</p>
                    </div>
                </div>

                <div className="s-card">
                    <img src="/src/Image/Mini/communication.svg" alt="" className="img-s"/>
                    <div>
                        <h4>Support 24/7</h4>
                        <p className="text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quidem!</p>
                    </div>
                </div>

                <div className="s-card">
                    <img src="/src/Image/Mini/wallet.svg" alt="Wallet" className="img-s"/>
                    <div>
                        <h4>Regular Cashback</h4>
                        <p className="text-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, odio!</p>
                    </div>
                </div>

                <div className="s-card">
                    <img src="/src/Image/Mini/happy.svg" alt="Happy face" className="img-s"/>
                    <div>
                        <h4>Top Standards</h4>
                        <p className="text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.</p>              
                    </div>
                </div>

            </div>

            </div>

        </article>
        </div>
    </>
  )
}

export default Features