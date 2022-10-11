import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <>
    <div className="banner">

     <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
         <span>start your adventures</span>
         <h3>Let's Explore This World</h3>
         <p>Our first priority is that you experience a vacation that is beyond what you expected. We strive to take the worry and stress out of the vacation planning process as well as getting you the best value for your investment.

         No matter if you are looking for a short stay at a hotel or a worldwide cruise, we have someone who can help you. 
         </p>
         
     </div>
     
    </div>



    <section className="footer">
     <div className="box-container">

      <div className="box" data-aos="fade-up" data-aos-delay="150">
        <a href="#" className="logo"> <i className="fas fa-paper-plane"></i>travel </a>
        <p>never stop always keep searching</p>
        <div className="share">
            <Link  to="/" className="fab fa-facebook-f"></Link>
            <Link   to="/" className="fab fa-twitter"></Link>
            <Link  to="/" className="fab fa-instagram"></Link>
            <Link  to="/"className="fab fa-linkedin"></Link>
        </div>
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="300">
        <h3>quick links</h3>
        <Link  to="/" className="links"> <i className="fas fa-arrow-right"></i> home </Link>
        <Link  to="/" className="links"> <i className="fas fa-arrow-right"></i> about </Link>
        <Link  to="/" className="links"> <i className="fas fa-arrow-right"></i> Memories </Link>
       
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="450">
        <h3>contact info</h3>
        <p> <i className="fas fa-map"></i> barika -algeria</p>
        <p> <i className="fas fa-phone"></i> +213661397937 </p>
        <p> <i className="fas fa-envelope"></i> saibAbderrahman@gmail.com </p>
        <p> <i className="fas fa-clock"></i> 7:00am - 10:00pm </p>
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="600">
        <h3>newsletter</h3>
        <p>signIn  for latest updates</p>
      
    </div>

</div>

</section>

<div className="credit">created by <span>mr. saib abderrahmane</span> | all rights reserved!</div>

    </>
       

        
    
    
  )
}

export default Footer
