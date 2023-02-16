import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    function openMenu(){
        document.querySelector('.menu-bg').style.display='block'
    }
    function closeMenu(){
        document.querySelector('.menu-bg').style.display='none'
    }
    return (
        <>
            <nav>
                <div className='brand'>
                    <h2><span className='pink'>Kiki</span> Events</h2>
                </div>
                <ul className="nav-link" role='navigation'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className="more">
                    <ul>
                        <li className="nav-link"><a href="tel:0728466269" target="_blank"><i className="fa fa-phone"></i> +254728466269</a></li>
                        <li className="menu-btn" onClick={openMenu}><i className="fa fa-list"></i></li>
                    </ul>
                </div>
            </nav>
            <div className="menu-bg"  onClick={closeMenu}>
                <div className='menu'>
                    <ul className="nav-link" role='navigation'>
                        <li onClick={closeMenu}><Link to="/">Home</Link></li>
                        <li onClick={closeMenu}><Link to="/events">Events</Link></li>
                        <li onClick={closeMenu}><Link to="/gallery">Gallery</Link></li>
                        <li onClick={closeMenu}><a href="#contact">Contact Us</a></li>
                        <li onClick={closeMenu} className="nav-link"><a href="tel:0728466269" target="_blank"><i className="fa fa-phone"></i> +254728466269</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;