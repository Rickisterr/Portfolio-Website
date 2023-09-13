import { Nav, Navbar } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

function NavBar() {
    // function to open and close menu via hamburger button in portrait mode
    const hamburgerMenuToggle = () => {
        if(document.getElementById('my-toggle-links').className == 'openHamburger') {
            document.getElementById('my-toggle-links').className = 'closeHamburger';
            setTimeout(() => {document.getElementsByClassName('HamburgerMenu')[0].style.display = 'none';}, 300);   // makes hamburger menu disappear
        }
        else {
            document.getElementById('my-toggle-links').className = 'openHamburger';
            setTimeout(() => {document.getElementsByClassName('HamburgerMenu')[0].style.display = 'block';}, 300);  // makes hamburger menu collapse open
        }
    };

    // function to scroll to top of website
    // used with buttons on click function
    const toTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div style={{ position: 'fixed', zIndex: '10' }}>
                <div className='ExpandingNav'>
                    <div className='NavBg'>
                        <Button className='ExpandToggle' onClick={hamburgerMenuToggle}><Icons.List style={{ color: '#FFFFFF', fontSize: '1.875rem' }} /></Button>
                    </div>
                    <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>

                    <div className='HamburgerMenu' style={{ display: 'none' }}>
                        <div id="my-toggle-links" className='initHamburger' style={{ display: 'flex', flexDirection: 'column', msflexDirection: 'column', WebkitflexDirection: 'column', width: 'auto', textAlign: 'justify' }}>
                            <Link as={Link} to='/' className='ExpandButtons'>Home</Link>

                            <Link as={Link} to='/about' className='ExpandButtons'>About</Link>

                            <Link as={Link} to='/projects' className='ExpandButtons'>Projects</Link>

                            <Link as={Link} to='/blog' className='ExpandButtons'>Blog</Link>

                            <Link as={Link} to='/resume' className='ExpandButtons'>Resume</Link>
                        </div>
                    </div>

                </div>
                <div className='FixedNav'>
                    <Navbar className='NavBg'>
                        <Navbar.Brand as={Link} to='/'>
                            <Icons.House style={{ color: '#FFFFFF', fontSize: '3.75vh' }} />
                        </Navbar.Brand>
                        <Nav style={{ width: '100%', display: 'flex' }}>

                            <Nav.Link as={Link} to='/' className='NavButton' style={{ marginLeft: '3vw' }} onClick={toTop}>Home</Nav.Link>

                            <Nav.Link as={Link} to='/about' className='NavButton' onClick={toTop}>About</Nav.Link>

                            <Nav.Link as={Link} to='/projects' className='NavButton' onClick={toTop}>Projects</Nav.Link>

                            <Nav.Link as={Link} to='/blog' className='NavButton' onClick={toTop}>Blog</Nav.Link>

                            <Nav.Link as={Link} to='/resume' className='NavButton' onClick={toTop}>Resume</Nav.Link>


                        </Nav>

                        <button className='GitHubButton'><Icons.Github style={{ height: '4vh' }} /></button>

                    </Navbar>
                </div>
                <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>
            </div>
        </>
    );
}

export default NavBar;