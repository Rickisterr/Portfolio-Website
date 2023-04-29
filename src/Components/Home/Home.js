import './Home.css';
import ParticleEff from '../ParticlesEffect';
import { useEffect, useState } from 'react';

import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1 (2).png';
import STS41B_35_1613_Bruce_McCandless_II from '../Resources/STS41B-35-1613_-_Bruce_McCandless_II_astronaut_floating.png';
import Laptop from '../Resources/Laptop';
import Content from '../Content';



function Home() {
    var msgval = 0;
    const [typedmsg, setTypedmsg] = useState('');
    const msgs = ["Website Design", "Software Development ", "Data Science ", "Artificial Intelligence "];
    var msgflag = "0"

    function getMsgflag() {
        if(sessionStorage.getItem("msgflag")) {
            msgflag = sessionStorage.getItem("msgflag");
        }
        else {
            sessionStorage.setItem("msgflag", "0")
            msgflag = "0";
        }
    }

    function setMsgflag() {
        sessionStorage.setItem("msgflag", msgflag);
    }

    function incVal() {
        if(msgval == 3) {
            msgval = 0;
        }
        else {
            msgval += 1;
        }
    }

    function updateMsg(i) {
        return(setTypedmsg(msgs[msgval].slice(0, i)));
    }

    function MessageUpdation() {
        getMsgflag();
        if(typedmsg.length == 0) {
            if(msgflag == "0") {
                updateMsg(1);
            }
            else {
                msgflag = "0";
                incVal();
            }
            console.log("start");
        }
        else if(typedmsg.length == msgs[msgval].length) {
            msgflag = "1";
            console.log("Set true");
            updateMsg(typedmsg.length - 1);
            console.log("equals deleted");
        }
        else {
            if(msgflag == "1") {
                updateMsg(typedmsg.length - 1);
                console.log("deleted");
            }
            else {
                updateMsg(typedmsg.length + 1);
                console.log("added");
            }
        }
        console.log(msgflag);
        setMsgflag();
    };

    useEffect(() => {
        const interval = setInterval(MessageUpdation, 500);
        return () => clearInterval(interval);
    });

    return (
        <div className='Wrapper' style={{ height: 'min-content' }}>
            <ParticleEff />
            <div className='ColFlexWrap'>
                <div className='ViewportPage RowFlexWrap'>
                    <div>
                        <h1 className='WhiteNormText'>WELCOME</h1>
                        <h2 className='WhiteNormText'>MY NAME IS RICHIK SINHA</h2>
                    </div>
                    <div>
                        <Laptop
                            scale='scale(0.5)'
                            display={typedmsg}
                            // display='printf("Per Aspera ad Astra")'
                        />
                    </div>
                </div>
                <div className='ViewportPage RowFlexWrap'>

                </div>
            </div>
        </div>
    );
}

export default Home;