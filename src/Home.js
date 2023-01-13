import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Home = () => {

    return (
        <>
            <NavBar/>
                <div class="landing">
                    <div class='hero-image'>
                        <h1>Welcome to <span style="color:pink;">Kiki</span> Events</h1>
                        <h3>We handle event planning and organising.</h3>
                        <button class="book-btn">Book Now</button>
                        <div id="about"></div>
                    </div>

                    <div class="about" id="about">
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
            <Footer/>
        </>
    )
}

export default Home;
