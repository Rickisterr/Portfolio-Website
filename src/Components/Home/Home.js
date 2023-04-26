import './Home.css';
import ParticleEff from '../ParticlesEffect';

import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1 (2).png';
import STS41B_35_1613_Bruce_McCandless_II from '../Resources/STS41B-35-1613_-_Bruce_McCandless_II_astronaut_floating.png';



function Home() {

    return (
        <div className='Wrapper' style={{ height: 'min-content' }}>
            <ParticleEff />
            <div className='ColFlexWrap'>
                
            </div>
        </div>
    );
}

export default Home;