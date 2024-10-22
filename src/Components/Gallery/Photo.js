import './Photo.css';

function Photo(props) {

    return (
        <div style={{ padding: '2vw' }}>
            <div style={{ minWidth: '25vw', maxWidth: '100%', textAlign: 'center' }} className='PhotoBox'>
                <img
                    src={props.pic}
                    className='figure-img img-fluid rounded shadow-3 mb-3 Photo'
                    alt='...'
                    style={{ maxWidth: props.wd ? props.wd : 'inherit', height: props.ht ? props.ht : 'auto', objectFit: 'cover' }}
                />
                <h3 style={{ maxWidth: props.wd ? props.wd : 'inherit', height: 'auto' }} className='caption'>{props.caption}</h3>
            </div>
        </div>

        // <div style={{ width: '75%', height: '75%', borderRadius: '1rem', boxShadow: '1rem 0.75rem 0.5rem #36454f', position: 'absolute', transition: 'all ease-in-out 6s' }}>

        //     <div style={{ backgroundImage: `url(${props.pic})`, borderStyle: 'solid', borderRadius: '1rem', borderColor: '#f4f1de', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background 0.75s', MozTransition: 'background 0.75s', OTransition: 'background 0.75s', WebkitTransition: 'background 0.75s' }} />

        //     <div style={{ fontFamily: 'Lato', position: 'absolute', textAlign: 'center', top: '25%', left: '5%', width: '90%', overflow: 'hidden' }}>
        //         <p className="PicTitles" style={{ color: '#4bb3fd', fontFamily: 'Roboto' }}><b><b>{props.caption}</b></b></p>
        //     </div>

        // </div>
    );
}

export default Photo;