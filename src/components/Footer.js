import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <div className="container">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="https://instagram.com/kikievents1" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://wa.me+254728466269" target="_blank" rel="noreferrer">Whatsapp</a></li>
                        <li><a href="mailto:imranmat254@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h2>Support</h2>
                    <ul>
                        <li><a href="https://instagram.com/kikievents1" rel="noreferrer">Help Center</a></li>
                        <li><a href="https://wa.me+254728466269" target="_blank" rel="noreferrer">Get Help</a></li>
                        <li><a href="mailto:imranmat254@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                    </ul>
                </div>
            </div>
            <div className="social-media-links">
                <ul>
                    <li><a href="https://instagram.com/kikievents1" title="Instagram" style={{color: "rgb(207, 67, 90)"}} target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://ke.linkedin.com/in/imranyy" title="LinkedIn" style={{color: "rgb(120, 120, 235)"}} target="_blank" rel="noreferrer"><i className="fa fa-linkedIn"></i></a></li>
                    <li><a href="https://wa.me/+254728466269" title="Whatsapp" target="_blank" style={{color: "green"}} rel="noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                    <li><a href="mailto:imranmat254@gmail.com" title="Email" style={{color: "rgb(238, 111, 111)"}} target="_blank"  rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                    <li><a href="tel:0728466269" target="_blank" title="Call" rel="noreferrer"><i className="fa fa-phone"></i></a></li>
                    <li><a href="https://twitter.com/kikievents1" title="Twitter" style={{color: "blue"}} target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div>
                <small>
                    &copy;2023 Kiki Events
                </small>
            </div>
        </footer>
    )
}

export default Footer
