import React from 'react'
import {Link, useLocation} from 'react-router-dom'


const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className="page-title home"> 
        <div className="container">         
            <ul className="breadCrumb">

                <img src="/src/Image/icon/home.svg" alt="home icon"/>
                <li ><Link to="/" className="homepage">Homepage</Link></li>
                <img src="/src/Image/icon/arrows.svg" alt="arrows"/>
                {
                    pathnames.map((value, index) => { 
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={to}>
                                { index === pathnames.length - 1
                                    ? (<span>{value.replace(/-/g, ' ')}</span>)
                                    : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}

                            </li>
                        );
                    })
                }
            </ul>
        </div>
       
    </section>
  );
};

export default BreadCrumb