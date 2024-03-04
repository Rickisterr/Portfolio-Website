import * as Icons from 'react-bootstrap-icons';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function PicCarousel(props) {
    const [cnt, setCnt] = useState(0);

    function CycleRight() {
        setCnt((cnt + 1) % props.iter);
    }

    function CycleLeft() {
        setCnt((props.iter + cnt - 1) % props.iter);
    }

    return (
        <div style={{ width: '75%', height: '75%', borderRadius: '1rem', boxShadow: '1rem 0.75rem 0.5rem #36454f', position: 'absolute', transition: 'all ease-in-out 6s' }}>
            <HashLink smooth to={props.link[cnt]}>
                <div style={{ backgroundImage: `url(${props.Pic[cnt]})`, borderStyle: 'solid', borderRadius: '1rem', borderColor: '#f4f1de', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background 0.75s', MozTransition: 'background 0.75s', OTransition: 'background 0.75s', WebkitTransition: 'background 0.75s' }} />
                <div style={{ fontFamily: 'Lato', position: 'absolute', textAlign: 'center', top: '25%', left: '5%', width: '90%', overflow: 'hidden' }}>
                    <p className="PicTitles" style={{ color: '#4bb3fd', fontFamily: 'Roboto' }}><b><b>{props.Caption[cnt]}</b></b></p>
                </div>
            </HashLink>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '1rem' }}>
                <Icons.ChevronLeft className='PointeronHover' onClick={CycleLeft} style={{ color: '#f4f1de', fontSize: '2rem' }} />
                <Icons.ChevronRight className='PointeronHover' onClick={CycleRight} style={{ color: '#f4f1de', fontSize: '2rem' }} />
            </div>
        </div>
    );
}

export default PicCarousel;