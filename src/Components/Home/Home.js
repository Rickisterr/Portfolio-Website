import './Home.css';
import { useEffect, useState } from 'react';
import Contact from '../Contact';
import { Link } from 'react-router-dom';
import Laptop from '../Resources/Laptop';
import PFP from '../Resources/ProfilePic.jpeg';
import PicCarousel from '../Resources/PicCarousel';

import SammardProj from '../Resources/RocketProjectOpen.jpg';
import PortfolioProj from '../Resources/PortfolioProjectOpen.jpg';
import Game2048 from '../Resources/Game2048Open.jpg';


function Home() {                                           // Home Page class

    // Message counter
    var msgval = 0;

    // Setting useState to typedmsg so update to variable causes page reload and hence display of update
    const [typedmsg, setTypedmsg] = useState('');

    // Messages set to display
    const msgs = ["Web Design  ", "Software Development  ", "Embedded Systems  ", "Artificial Intelligence  "];

    // message flag to be stored in session storage
    var msgflag = "0"

    // arrays used for cycling through slideshow for Projects slideshow
    const SlidePics = [SammardProj, PortfolioProj, Game2048];
    const SlideCapts = ['TEAM SAMMARD PROJECTS', 'DIABETES PREDICTOR', '2048 GAME'];
    const SlideLinks = ['/projects#SammardWorksid', '/projects#Diabetes-Model', '/projects#Game-2048'];


    function getMsgflag() {                                 // gets the last update to the message flag before page refresh from session storage
        
        if (sessionStorage.getItem("msgflag")) {
            msgflag = sessionStorage.getItem("msgflag");
        }

        else {
            sessionStorage.setItem("msgflag", "0")
            msgflag = "0";
        }

        if (sessionStorage.getItem("msgval")) {
            msgval = parseInt(sessionStorage.getItem("msgval"));
        }

        else {
            sessionStorage.setItem("msgval", "0")
            msgval = 0;
        }

    }



    function setMsgflag() {                                 // sets the message flag value in session storage
        sessionStorage.setItem("msgflag", String(msgflag));
        sessionStorage.setItem("msgval", String(msgval));
    }



    function incVal() {                                     // increases value of message counter
        if (msgval == "3") {
            msgval = "0";
            setMsgflag();
        }
        else {
            msgval += 1;
            setMsgflag();
        }
    }



    function updateMsg(i) {                                 // updates value of typed message so that output can be displayed as such
        return (setTypedmsg(msgs[msgval].slice(0, i)));
    }



    function MessageUpdation() {                            // Updates message

        getMsgflag();
        
        if (typedmsg.length == 0) {

            if (msgflag == "0") {
                updateMsg(1);
            }

            else {
                msgflag = "0";
                incVal();
            }
            
        }
        else if ((typedmsg.length == msgs[msgval].length) && (msgflag != "6")) {
            msgflag = String(parseInt(msgflag) + 1);
            setMsgflag();
            // console.log("Set true");
        }
        else if ((typedmsg.length == msgs[msgval].length) && (msgflag == "6")) {
            msgflag = "7";
            setMsgflag();
            // console.log("Setting delete");
            updateMsg(typedmsg.length - 1);
            // console.log("equals deleted");
        }
        else {
            if (msgflag == "7") {
                updateMsg(typedmsg.length - 1);
                // console.log("deleted");
            }
            else {
                updateMsg(typedmsg.length + 1);
                // console.log("added");
            }
        }
        // console.log(msgflag);
        setMsgflag();
    };



    useEffect(() => {                                           // Updates the message display every interval or so
        var interval = setInterval(MessageUpdation, 100);
        return () => clearInterval(interval);
    });



    return (
        <div className='Wrapper' style={{ height: 'min-content' }}>


            <div className='ColFlexWrap'>


                <div className='ViewportPage RowFlexWrap'>

                    <div>
                        <h1 className='WhiteNormText LeftToCenter' style={{ fontSize: '4.5vmax' }}>WELCOME!<span id='high-five'>  &#128588;</span></h1>
                        <h2 className='WhiteNormText LeftToCenter' style={{ fontSize: '2.75vmax' }}>MY NAME IS RICHIK SINHA</h2>
                    </div>

                    <div id='LaptopPic'>
                        <Laptop
                            scale='scale(1)'
                            display={typedmsg}
                        />
                    </div>

                </div>


                <div className='ViewportPage RowFlexWrap RowFlexWrapReverse'>
                    {/* <Link to='/about'> */}
                    <div className='RowFlexWrap RowFlexWrapReverse' style={{ backgroundColor: '#36454f', gap: '5vmin', paddingBlock: '6vmin', paddingInline: '12vmin', borderStyle: 'solid', borderWidth: '0.25vmin', borderRadius: '1rem', borderColor: '#f4f1de' }}>
                        <div>
                            <h1 className='WhiteNormText Headings' style={{ paddingBottom: '1.75vmin' }}>About Me</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify' }}>
                                My name is Richik Sinha. I am pursuing a Computer Science and Engineering Undergraduate degree at Vellore Institute of Technology, Vellore Campus.
                                I am obsessed with learning various concepts of science and technology and applying them to solve real world problems to the best of my abilities.
                                I am a quick learner and hard worker, which allows me to push myself harder and harder in my work.
                                My subjects of expertise are diverse and ever-increasing. As such, I look forward to working together on projects with those interested in my services and abilities.
                            </p>
                        </div>
                        <div>
                            <Link to='/about'>
                                <img alt="Richik Sinha" src={PFP} loading="lazy" className='PicButton' style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                            </Link>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>


                <div className='ViewportPage' style={{ gap: '5vmin', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PicCarousel link={SlideLinks} Pic={SlidePics} Caption={SlideCapts} iter={SlideLinks.length} />
                </div>



                <Contact />


            </div>


        </div>
    );
}

export default Home;