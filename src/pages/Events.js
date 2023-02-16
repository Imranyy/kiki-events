import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import img2 from  "../assests/img2.jpeg";
import img3 from  "../assests/img3.jpeg";
import img4 from  "../assests/img4.jpeg";
import img5 from  "../assests/img5.jpeg";
import { motion } from 'framer-motion';

function Events(props) {
    const eventImages=[
      {
        id:1,
        img: img3
      },
      {
        id:2,
        img: img4
      },
      {
        id:3,
        img: img5
      }
    ]
    return (
        <>
            <NavBar/>
            <div class='body'>
                <p class="header">Kiki Events/ Events</p>

                <div class="hero-section">
                    <div>
                      <a href={img2} target='_blank' rel='noreferrer'>
                        <motion.img 
                          initial={{scale:0}}
                          animate={{scale:1}}
                          transition={{duration:1}}
                          src={img2} 
                          alt="Kiki events images"
                        />
                      </a>
                    </div>
                    <article>
                    <h1>KiKi Events</h1>
                    <p>
                        Make your business shine online with a custom party website designed just for you by a professional designer. 
                        Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
                        Get inspired and start planning the perfect party web design today.
                    </p>
                    </article>
                </div>

                <div class="event-section">
                    {eventImages&&eventImages.map(i=>(
                        <a href={i.img} target="_blank" rel="noreferrer">
                          <motion.img 
                            src={i.img} 
                            alt="Kiki events images"
                            initial={{scale:0}}
                            whileInView={{scale:1}}
                            transition={{duration:1}}
                          />
                        </a>
                    ))}
                </div>

            </div>
            <Footer/>   
        </>
    );
}

export default Events;