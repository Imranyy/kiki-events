import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import img2 from "./assests/img2.jpeg";
import img4 from "./assests/img4.jpeg";
const Home = () => {

    return (
        <>
            <NavBar/>
                <div className="landing">
                    <div className='hero-image'>
                        <h1>Welcome to <span style={{color: "pink"}}>Kiki</span> Events</h1>
                        <h3>We handle event planning and organising.</h3>
                        <button className="book-btn">Book Now</button>
                        <div id="about"></div>
                    </div>

                    <div className="about" id="about">
                        <a href={img2} target='_blank' rel="noreferrer"><img src={img2} alt="kiki event image"/></a>
                        <div className="text">
                            <h2 style={{color: "rgb(211, 73, 96)"}}>About Us</h2>
                            <p>
                                Make your business shine online with a custom party website designed just for you by a professional designer. 
                                Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
                                Get inspired and start planning the perfect party web design today.
                            </p>
                        </div>
                    </div>   

                    <div className="about">
                        <div className="text">
                            <h2 style={{color: "rgb(211, 73, 96)"}}>Our History</h2>
                            <p>
                                Make your business shine online with a custom party website designed just for you by a professional designer. 
                                Need ideas? We’ve collected some amazing examples of party websites from our global community of designers. 
                                Get inspired and start planning the perfect party web design today.
                            </p>
                        </div>
                        <a href={img4} target='_blank' rel="noreferrer"><img src={img4} alt="kiki event image"/></a>
                    </div>   
                </div>
            <Footer/>
        </>
    )
}

export default Home;
