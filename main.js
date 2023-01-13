import './css/style.css'
import './css/responsive.css'

document.querySelector('#app').innerHTML = `
    <div>
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

       <div class="landing">
            <div class='hero-image'>
                <h1>Welcome to <span style="color:pink;">Kiki</span> Events</h1>
                <h3>We handle event planning and organising.</h3>
                <button class="book-btn">Book Now</button>
            </div>

            

            <div class="about">
                <img src="./assests/img2.jpeg" alt="kiki event image"/>
                <div class="text">
                    <h2 style="color: rgb(211, 73, 96);">About Us</h2>
                    <p>
                        Make your business shine online with a custom party website designed just for you by a professional designer. 
                        Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
                        Get inspired and start planning the perfect party web design today.
                    </p>
                </div>
            </div>   

            <div class="about">
                <div class="text">
                    <h2 style="color: rgb(211, 73, 96);">Our History</h2>
                    <p>
                        Make your business shine online with a custom party website designed just for you by a professional designer. 
                        Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
                        Get inspired and start planning the perfect party web design today.
                    </p>
                </div>
                <img src="./assests/img4.jpeg" alt="kiki event image"/>
            </div>   
        </div>
    </div>
`