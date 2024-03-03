import Contact from "../Contact";
import Photo from "./Photo";

import Test from "../Resources/RocketProjectOpen.jpg";

function Gallery() {

    return (
        <div className='Wrapper' style={{ height: 'min-content', paddingTop: '4.5rem' }}>

            <div style={{ marginBlock: '1.5rem' }}>
                <h1 className='Title' style={{ textAlign: 'center', color: '#f0ffff', fontFamily: 'Arial, Helvetica, sans-serif' }}>GALLERY</h1>
            </div>

            <div>

                <div className="RowFlexWrap">
                    
                    <Photo pic={Test} caption="Testing..." />
                    <Photo pic={Test} caption="Testing..." />
                    <Photo pic={Test} caption="Testing..." />

                </div>

            </div>

            {/* Contact Me Footer at the very end of the page's viewport */}
            <Contact />
        </div>
    );
}

export default Gallery;