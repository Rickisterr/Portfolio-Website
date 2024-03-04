import { Nav, Navbar } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

function NavBar() {

    // function to open and close menu via hamburger button in portrait mode
    const hamburgerMenuToggle = () => {

        if (document.getElementById('my-toggle-links').className == 'openHamburger') {
            document.getElementById('my-toggle-links').className = 'closeHamburger';
            setTimeout(() => { document.getElementsByClassName('HamburgerMenu')[0].style.display = 'none'; }, 300);   // makes hamburger menu disappear

        }

        else {
            document.getElementById('my-toggle-links').className = 'openHamburger';
            setTimeout(() => { document.getElementsByClassName('HamburgerMenu')[0].style.display = 'block'; }, 300);  // makes hamburger menu collapse open

        }

    };



    // function to scroll to top of website
    // used with buttons on click function
    const toTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

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
                            
                            <Link to='/' className='ExpandButtons'>Home</Link>

                            <Link to='/about' className='ExpandButtons'>About</Link>

                            <Link to='/projects' className='ExpandButtons'>Projects</Link>

                            <Link to='/gallery' className='ExpandButtons'>Gallery</Link>

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

                            <Nav.Link as={Link} to='/gallery' className='NavButton' onClick={toTop}>Gallery</Nav.Link>

                        </Nav>

                        <button className='GitHubButton'><a href='https://github.com/Rickisterr' target='_blank' rel="noreferrer"><Icons.Github style={{ height: '4vh' }} /></a></button>

                    </Navbar>

                    <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>


                </div>


            </div>
        </>
    );

}

export default NavBar;