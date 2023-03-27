import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';

import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1 (2).png';
import STS41B_35_1613_Bruce_McCandless_II from '../Resources/STS41B-35-1613_-_Bruce_McCandless_II_astronaut_floating.png';


function Home() {

    // useEffect(() => {
    //     gsap.from(
    //         "#Astronaut",
    //         {
    //             scrollTrigger : {
    //                 scrub: true
    //             },
    //             y: 150,
    //         }
    //     )
    // })

    useEffect(() => {
        gsap.fromTo(
            "#Astronaut",
            {
                y: -100
            },
            {
                y: 0,
                scrollTrigger: {
                    scrub: true
                }
            }
        )
    }, []);

    return (
        <div className='HomeWrapper' style={{ height: 'min-content' }}>
            <div className='ParallaxSection'>
                <img className='ParallaxImg' id='EarthBG' src={Earth_horizon_space} style={{ height: '100%', width: '100%', objectFit: 'cover', top: '0', left: '0' }} />
                <img className='ParallaxImg' id='spaceStation' src={STS135_final_flyaround_of_ISS_1} style={{ height: 'auto', width: '25%', objectFit: 'cover', top: '25%', left: '10%' }} />
                <img className='ParallaxImg' id='Astronaut' src={STS41B_35_1613_Bruce_McCandless_II} style={{ height: 'auto', width: '15%', objectFit: 'cover', top: '30%', right: '15%' }} />
            </div>
        </div>
    );
}

export default Home;