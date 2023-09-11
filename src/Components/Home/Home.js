import './Home.css';
import { useEffect, useState } from 'react';

// import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
// import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1 (2).png';
// import STS41B_35_1613_Bruce_McCandless_II from '../Resources/STS41B-35-1613_-_Bruce_McCandless_II_astronaut_floating.png';
import Laptop from '../Resources/Laptop';
import PFP from '../Resources/ProfilePic.jpeg';


function Home() {                                           // Home Page class
    // Message counter
    var msgval = 0;
    // Setting useState to typedmsg so update to variable causes page reload and hence display of update
    const [typedmsg, setTypedmsg] = useState('');

    // Messages set to display
    const msgs = ["Website Design", "Software Development ", "Data Science ", "Artificial Intelligence "];
    // message flag to be stored in session storage
    var msgflag = "0"

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
            // console.log("start");
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
                        <h1 className='WhiteNormText'>WELCOME</h1>
                        <h2 className='WhiteNormText'>MY NAME IS RICHIK SINHA</h2>
                    </div>
                    <div id='LaptopPic'>
                        <Laptop
                            scale='scale(1)'
                            display={typedmsg}
                        // display='printf("Per Aspera ad Astra")'
                        />
                    </div>
                </div>
                <div className='ViewportPage RowFlexWrap' style={{ gap: '5vmin' }}>
                    <div>
                        <h1 className='WhiteNormText Headings'>About Me</h1>
                        <p className='WhiteNormText Paragraphs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Consequat interdum varius sit amet. Porta nibh venenatis cras sed felis. Erat velit scelerisque in dictum non. Posuere morbi leo urna molestie at elementum eu. Faucibus et molestie ac feugiat. Velit dignissim sodales ut eu sem. Sed ullamcorper morbi tincidunt ornare. Bibendum neque egestas congue quisque egestas diam in. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elementum facilisis leo vel fringilla est.
                            Pretium viverra suspendisse potenti nullam. Lectus quam id leo in vitae. Risus nullam eget felis eget. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. In egestas erat imperdiet sed euismod. Pharetra massa massa ultricies mi quis hendrerit. Blandit libero volutpat sed cras. At elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla.
                        </p>
                    </div>
                    <div>
                        <img alt="Richik Sinha" src={PFP} loading="lazy" style={{ width: '25vw', minWidth: '25vmax' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;