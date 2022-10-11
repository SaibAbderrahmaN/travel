import React from 'react'
import { Link } from 'react-router-dom'
import videoOne from "../../asset/NEW ZEALAND _ Cinematic Travel Video(720P_HD).mp4"
import advOne from '../../asset/images/category-1.jpg'
import advtwo from '../../asset/images/category-2.jpg'
import advThree from '../../asset/images/category-4.jpg'



export const Main = () => {
  return (
    <>
    <section className="home" id="home">
        
        <div className="content">
            <span data-aos="fade-up" data-aos-delay="150">Welcome to Memories </span>
            <h3 data-aos="fade-up" data-aos-delay="300">and Moments Travel</h3>
            <p data-aos="fade-up" data-aos-delay="450">
            At Memories and Moments Travel we pride ourselves in assisting you with planning the vacation of a lifetime. Our goal is for you to have a great experience from the beginning of the planning until your return home followed by a lifetime of wonderful memories and remarkable moments.

             Our No-Fee agency provides you with quality service and the most up to date sales. We do the work you enjoy the memories!
             Specializing in…
             Disney Destinations ~ Family Friendly Travel ~ Honeymoons ~ Cruises ~ Group Travel ~ Themed Travel ~ Education Travel
             We are located throughout Northeast Ohio. Included in our focus on customer service is our ability to travel to you. Outside of Northeast Ohio? No worries! We also work with clients throughout the United States.
            </p>
            <Link data-aos="fade-up" data-aos-delay="600" to="/#memories" className="btn">Create memories</Link>
        </div>
        
        </section>

   


        <section className="about" id="about">
       
           <div className="video-container" data-aos="fade-right" data-aos-delay="300">
               <video src={videoOne} muted autoPlay loop className="video"></video>
            
           </div>

       
           <div className="content" data-aos="fade-left" data-aos-delay="600">
               <span>About</span>
               <h3>Nature's Majesty Awaits You</h3>
               <p>Our first priority is that you experience a vacation that is beyond what you expected. We strive to take the worry and stress out of the vacation planning process as well as getting you the best value for your investment.

                No matter if you are looking for a short stay at a hotel or a worldwide cruise, we have someone who can help you. 
                
               </p>
               <Link to="/" className="btn">read more</Link>
           </div>
       
       </section>
  <section className="category">

    <h1 className="heading">adventure idea!</h1>

    <div className="box-container">

        <div className="box">
            <img src={advOne} alt="" />
            <h3>bungee jump</h3>
            <p> also spelled bungy jumping, is an activity that involves a person jumping from a great height while connected to a large elastic cord. The launching pad is usually erected on a tall structure such as a building or crane, a bridge across a deep ravine,</p>
          
        </div>

        <div className="box">
            <img src={advtwo} alt="" />
            <h3>zip lines</h3>
            <p>is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope. It is designed to enable cargo or a person propelled by gravity to travel from the top to the bottom of the inclined cable by holding on to, or being attached to</p>
        </div>

       

        <div className="box">
            <img src={advThree} alt=""/>
            <h3>kayaking</h3>
            <p> is the use of a kayak for moving over water. It is distinguished from canoeing by the sitting position of the paddler and the number of blades on the paddle. A kayak is a low-to-the-water, canoe-like boat in which the paddler sits facing forward, legs in front, using a double-</p>
        </div>

    </div>

</section>


       
           
        

    </>
  )
}

export default Main
