import './Home.css';

import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1 (2).png';
import STS41B_35_1613_Bruce_McCandless_II from '../Resources/STS41B-35-1613_-_Bruce_McCandless_II_astronaut_floating.png';


function Home() {

    return (
        <div className='HomeWrapper' style={{ height: 'min-content' }}>
            <img id='EarthBG' src={Earth_horizon_space} style={{ width: '100vw', height: '100%' }} />
            <img className='BounceImg' id='spaceStation' src={STS135_final_flyaround_of_ISS_1} style={{ height: 'auto', width: '25%', objectFit: 'cover', top: '25%', left: '10%', animationDelay: '0.15s' }} />
            <img className='BounceImg' id='Astronaut' src={STS41B_35_1613_Bruce_McCandless_II} style={{ height: 'auto', width: '15%', objectFit: 'cover', top: '30%', right: '15%', animationDelay: '0.85s' }} />
        </div>
    );
}

export default Home;