import './Home.css';
import Earth_horizon_space from '../Resources/Earth_horizon_space.jpg';
import STS135_final_flyaround_of_ISS_1 from '../Resources/STS-135_final_flyaround_of_ISS_1.png';

function Home() {

    return (
        <div className='HomeWrapper' style={{ height: 'min-content' }}>
            <div className='ParallaxSection'>
                <img className='ParallaxImg' src={Earth_horizon_space} style={{ height: '150vh' }} />
                <img className='ParallaxImg' src={STS135_final_flyaround_of_ISS_1} />
            </div>
        </div>
    );
}

export default Home;