import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <div class='brand'>
            <h2><span class='pink'>Kiki</span> Events</h2>
            </div>
            <ul class="nav-link" role='navigation'>
                <li><a href="index.html">Home</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div class="more">
            <ul>
                <li class="nav-link"><a href="tel:0754423664" target="_blank"><i class="fa fa-phone"></i> +254754423664</a></li>
                <li class="menu-btn"><a href="#"><i class="fa fa-list"></i></a></li>
            </ul>      
            </div>
        </nav>
    );
}

export default NavBar;