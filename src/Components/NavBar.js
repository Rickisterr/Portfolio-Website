import { Nav, Navbar } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

function NavBar() {

    const hamburgerMenuToggle = () => {
        if(document.getElementById('my-toggle-links').className == 'openHamburger') {
            document.getElementById('my-toggle-links').className = 'closeHamburger';
            setTimeout(() => {document.getElementsByClassName('HamburgerMenu')[0].style.display = 'none';}, 300);
        }
        else {
            document.getElementById('my-toggle-links').className = 'openHamburger';
            setTimeout(() => {document.getElementsByClassName('HamburgerMenu')[0].style.display = 'block';}, 300);
        }
    };

    return (
        <>
            <div style={{ position: 'fixed' }}>
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
                        <Navbar.Brand>
                            <Icons.House style={{ color: '#FFFFFF', fontSize: '1.875rem' }} />
                        </Navbar.Brand>
                        <Nav style={{ width: '100%', display: 'flex' }}>

                            <Nav.Link as={Link} to='/' className='NavButton' style={{ marginLeft: '4vw' }}>Home</Nav.Link>

                            <Nav.Link as={Link} to='/about' className='NavButton'>About</Nav.Link>

                            <Nav.Link as={Link} to='/projects' className='NavButton'>Projects</Nav.Link>

                            <Nav.Link as={Link} to='/blog' className='NavButton'>Blog</Nav.Link>

                            <Nav.Link as={Link} to='/resume' className='NavButton'>Resume</Nav.Link>


                        </Nav>

                        <button className='GitHubButton'><Icons.Github style={{ width: '1.375rem', height: '1.375rem' }} /></button>

                    </Navbar>
                </div>
                <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>
            </div>
        </>
    );
}

export default NavBar;