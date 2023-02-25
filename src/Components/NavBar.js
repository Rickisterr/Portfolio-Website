import { Nav, Navbar } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

function NavBar() {
    const [open, setOpen] = useState(false);
    const openRef = useRef(null);

    return (
        <>
            <div style={{ position: 'fixed' }}>
                <div className='ExpandingNav'>
                    <div className='NavBg'>
                        <Button className='ExpandToggle' onClick={() => setOpen(!open)} aria-controls='toggleLinks' aria-expanded={open}><Icons.List style={{ color: '#FFFFFF', fontSize: '1.875rem' }} /></Button>
                    </div>
                    <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>
                    
                    <CSSTransition
                        in={open}
                        timeout={300}
                        unmountOnExit
                        nodeRef={openRef}
                        classNames="my-toggle"
                    >
                        <div className='my-toggle-links' ref={openRef} style={{ display: 'flex', flexDirection: 'column', width: 'auto', textAlign: 'justify' }}>
                            <Link as={Link} to='/' className='ExpandButtons'>Home</Link>

                            <Link as={Link} to='/about' className='ExpandButtons'>About</Link>

                            <Link as={Link} to='/projects' className='ExpandButtons'>Projects</Link>

                            <Link as={Link} to='/blog' className='ExpandButtons'>Blog</Link>

                            <Link as={Link} to='/resume' className='ExpandButtons'>Resume</Link>
                        </div>
                    </CSSTransition>

                </div>
                <div className='FixedNav'>
                    <Navbar className='NavBg'>
                        <Navbar.Brand>
                            <Icons.House style={{ color: '#FFFFFF', fontSize: '1.875rem' }} />
                        </Navbar.Brand>
                        <Nav style={{ width: '100%' }}>

                            <Nav.Link as={Link} to='/' className='NavButton' style={{ marginLeft: '4vw' }}>Home</Nav.Link>

                            <Nav.Link as={Link} to='/about' className='NavButton'>About</Nav.Link>

                            <Nav.Link as={Link} to='/projects' className='NavButton'>Projects</Nav.Link>

                            <Nav.Link as={Link} to='/blog' className='NavButton'>Blog</Nav.Link>

                            <Nav.Link as={Link} to='/resume' className='NavButton'>Resume</Nav.Link>

                            <button className='GitHubButton'><Icons.Github style={{ width: '1.375rem', height: '1.375rem' }} /></button>
                        </Nav>
                    </Navbar>
                </div>
                <div style={{ width: '100vw', height: '0.0625rem', backgroundColor: '#FFFFFF' }}></div>
            </div>
        </>
    );
}

export default NavBar;