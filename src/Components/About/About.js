import './About.css';
import Contact from "../Contact";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PFP from '../Resources/ProfilePic.jpeg';


function About() {
    return (
        // Page wrapper to wrap around all elements except navbar on page and end with contact as footer
        <div className="Wrapper" style={{ height: 'min-content', paddingTop: '4.5rem' }}>


            {/* Flax wrapping content along a column */}
            <div className='ColFlexWrap' id="SammardWorksid" style={{ paddingInline: '7vw', gap: '3rem' }}>


                {/* Page Title */}
                <h1 className='Title' style={{ color: '#f0ffff', marginBlockStart: '1.5rem' }}>ABOUT ME</h1>



                <div className='BoxWrap ColFlexWrap' style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '0vmin' }}>


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


                </div>


            </div>

            {/* Contacts Footer */}
            <Contact />

        </div>
    )
}

export default About;