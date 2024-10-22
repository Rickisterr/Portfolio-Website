import './About.css';
import Contact from "../Contact";

import PFP from '../Resources/ProfilePic.jpeg';
import { Avatar, Typography, Rating } from '@mui/material';


import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import HttpIcon from '@mui/icons-material/Http';
import SmartToyIcon from '@mui/icons-material/SmartToy';


function About() {
    return (
        // Page wrapper to wrap around all elements except navbar on page and end with contact as footer
        <div className="Wrapper" style={{ height: 'min-content', paddingTop: '4.5rem' }}>


            {/* Flax wrapping content along a column */}
            <div className='ColFlexWrap' id="SammardWorksid" style={{ paddingInline: '7vw', gap: '3rem' }}>


                {/* Page Title */}
                <h1 className='Title' style={{ color: '#f0ffff', marginBlockStart: '1.5rem' }}>ABOUT ME</h1>



                <div className='BoxWrap ColFlexWrap' style={{ gap: '20vmin', marginBottom: '4vmin', paddingTop: '0vmin' }}>

                    {/* Introduction Box */}
                    <div className="RowFlexWrap" style={{ width: '100%', backgroundColor: '#36454f', gap: '5vmin', paddingBlock: '5vmin', paddingInline: '9vmin', borderStyle: 'solid', borderWidth: '0.25vmin', borderRadius: '1rem', borderColor: '#f4f1de', minHeight: '50vh' }}>

                        <div style={{ marginInlineEnd: '2.5vmax' }}>

                            <h1 className='WhiteNormText Headings' style={{ alignItems: 'left', marginBlockEnd: '1.5vmin' }}>Introduction</h1>


                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: 'maxContent' }}>
                                My name is Richik Sinha and I have an obsession with all things related to science and engineering.
                                I am currently pursuing an Undergraduate degree in Computer Science and Engineering. I will be
                                graduating with this degree in 2025.<br />I have hands-on experience in Machine Learning, Software
                                Development, Website Development, Python, C/C++, Java, R, and STM Microcontroller Programming in
                                Embedded C.<br />My abilities tend to develop more as I work on projects that push me harder than before.
                                As such, I am always on the lookout for difficult projects with steep learning curves to motivate
                                my development further and further.
                            </p>

                        </div>


                        {/* Image to right of textbox */}
                        <div>
                            <img alt="Richik Sinha" src={PFP} loading="lazy" style={{ maxWidth: '22.5vmax', height: 'auto', borderRadius: '1rem' }} />
                        </div>

                    </div>


                    {/* Skills */}
                    <div style={{ width: '100%', paddingInline: '9vmin', paddingBlock: '4vmin' }}>


                        <h1 className='WhiteNormText Headings' style={{ textAlign: 'left' }}>Skill Set</h1>


                        <div className='RowFlexWrap' style={{ marginBlock: '7.5vmin', justifyContent: 'center', alignItems: 'center', gap: '3vmin' }}>

                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'green' }}
                                    >
                                        <DeveloperBoardIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>Embedded C</Typography>
                                    <Rating name="read-only" size='large' value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>


                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'cyan' }}
                                    >
                                        <LaptopIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>Software Development</Typography>
                                    <Rating name="read-only" size='large' value={4} precision={0.5} readOnly />
                                </div>
                            </div>

                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'lightsalmon' }}
                                    >
                                        <HttpIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>Web Development</Typography>
                                    <Rating name="read-only" size='large' value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>

                        </div>



                        <div className='RowFlexWrap' style={{ justifyContent: 'center', alignItems: 'center', gap: '3vmin' }}>

                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'lightyellow' }}
                                    >
                                        <TerminalIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>Python Programming</Typography>
                                    <Rating name="read-only" size='large' value={5} precision={0.5} readOnly />
                                </div>
                            </div>


                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'lightgreen' }}
                                    >
                                        <AddIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>C/C++ Programming</Typography>
                                    <Rating name="read-only" size='large' value={4} precision={0.5} readOnly />
                                </div>
                            </div>


                            <div className='FlexStart' style={{ width: '33%', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', gap: '2vmin', flexGrow: '1' }}>
                                <div style={{ width: 'max-content' }}>
                                    <Avatar
                                        sx={{ width: 100, height: 100, bgcolor: 'lightpink' }}
                                    >
                                        <SmartToyIcon sx={{ fontSize: '4rem', color: 'black' }} />
                                    </Avatar>
                                </div>
                                <div className='ColFlexWrap FlexStart' style={{ gap: '1vmin' }}>
                                    <Typography component="legend" variant='h6' style={{ color: '#f0ffff' }}>AI/ML</Typography>
                                    <Rating name="read-only" size='large' value={3.5} precision={0.5} readOnly />
                                </div>
                            </div>

                        </div>



                    </div>


                    {/* Education */}
                    <div style={{ width: '100%', paddingInline: '9vmin', paddingBlock: '4vmin' }}>

                        <h1 className='WhiteNormText Headings' style={{ textAlign: 'left', paddingBlockEnd: '2.5vmin' }}>Education</h1>

                        {/* Most recent/current Education */}
                        <div style={{ display: 'flex', flexDirection: 'row', msFlexDirection: 'row', paddingBlock: '0.75vmin' }}>
                            <p style={{ fontSize: '8.25vmin' }}>|</p>
                            <div style={{ paddingLeft: '7.5vmin' }}>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '3vmin' }}><b>Vellore Institute of Technology</b> / B. Tech in CSE Core</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '2vmin' }}>AUGUST 2021 - PRESENT</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '1.75vmin' }}>TAMIL NADU</Typography>
                            </div>
                        </div>


                        {/* Prior Education */}
                        <div style={{ display: 'flex', flexDirection: 'row', msFlexDirection: 'row', paddingBlock: '0.75vmin' }}>
                            <p style={{ fontSize: '8.25vmin' }}>|</p>
                            <div style={{ paddingLeft: '7.5vmin' }}>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '3vmin' }}><b>Delhi Public School Ruby Park</b> / CBSE (10+2)</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '2vmin' }}>APRIL 2019 - JUNE 2021</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '1.75vmin' }}>WEST BENGAL</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', msFlexDirection: 'row', paddingBlock: '0.75vmin' }}>
                            <p style={{ fontSize: '8.25vmin' }}>|</p>
                            <div style={{ paddingLeft: '7.5vmin' }}>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '3vmin' }}><b>Don Bosco School Park Circus</b> / ICSE (8-10)</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '2vmin' }}>AUGUST 2016 - MARCH 2019</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '1.75vmin' }}>WEST BENGAL</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', msFlexDirection: 'row', paddingBlock: '0.75vmin' }}>
                            <p style={{ fontSize: '8.25vmin' }}>|</p>
                            <div style={{ paddingLeft: '7.5vmin' }}>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '3vmin' }}><b>Bridgewater Raritan Middle School</b> / Grade 7</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '2vmin' }}>SEPTEMBER 2015 - JUNE 2016</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '1.75vmin' }}>NEW JERSEY</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', msFlexDirection: 'row', paddingBlock: '0.75vmin' }}>
                            <p style={{ fontSize: '8.25vmin' }}>|</p>
                            <div style={{ paddingLeft: '7.5vmin' }}>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '3vmin' }}><b>Upper Merion Area Middle School</b> / Grade 5, 6</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '2vmin' }}>SEPTEMBER 2013 - JUNE 2015</Typography>
                                <Typography component="legend" style={{ color: '#f0ffff', fontSize: '1.75vmin' }}>PENNSYLVANIA</Typography>
                            </div>
                        </div>


                    </div>


                </div>

                {/* Contacts Footer */}
                <Contact />

            </div >
        </div>
    )
}

export default About;