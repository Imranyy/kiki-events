import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Events(props) {
    const eventImages=[
        "./assests/img3.jpeg",
        "./assests/img4.jpeg",
        "./assests/img5.jpeg"
    ]
    return (
        <>
            <NavBar/>
            <div class='body'>
                <p class="header">Kiki Events/ Events</p>

                <div class="hero-section">
                    <div>
                    <img src="./assests/img2.jpeg" alt="Kiki events images"/>
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
                    <img src={eventImages[0]} alt="Kiki events images"/>
                    <img src={eventImages[1]} alt="Kiki events images"/>
                    <img src={eventImages[2]} alt="Kiki events images"/>
                </div>

            </div>
            <Footer/>   
        </>
    );
}

export default Events;