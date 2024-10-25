import React from 'react'

function Contacts() {
  return (
    <>
     <div id="contacts" className="container">
                <img src="/src/Image/Friends.svg" alt="Contacts"/>
                <div className="Receive">
                    <h2>Receive payment from international bank details</h2>
                    <div>
                        <div className="flex-2"> 
                            <div className="card-2">
                                <img className="img-s" src="/src/Image/Mini/Vector.svg" alt="Credit card"/>
                                <p>Manage Your payment online. Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="wallet-2">
                                <img className="img-s" src="/src/Image/Mini/wallet.svg" alt="Wallet"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, assumenda!</p>
                            </div>
                        </div>
                    </div>
                    <div className="learn-btn">
                        <button  href="#" className="learn-more">
                            <span>Learn more</span>
                            <img src="/src/Image/icon-r.svg" alt="Learn more"/>
                        </button>

                    </div>
                    
                </div>
                
            </div>
    </>
  )
}

export default Contacts