import Contact from "../Contact";
import Photo from "./Photo";

import Test from "../Resources/RocketProjectOpen.jpg";
import ExplainingFSW_SACup from '../Resources/GalleryPage/ExplainingFSW_SACup.jpg';

function Gallery() {

    return (
        <div className='Wrapper' style={{ height: 'min-content', paddingTop: '4.5rem' }}>

            <div style={{ marginBlock: '1.5rem' }}>
                <h1 className='Title' style={{ color: '#f0ffff', textAlign: 'center' }}>GALLERY</h1>
            </div>

            <div>

                <div className="RowFlexWrap">

                    <Photo
                        pic={ExplainingFSW_SACup}
                        caption={<>Explaining Vajra rocket's flight software to fellow rocketeers</>}
                        ht='90vh'
                        wd='25vw'
                    />

                    <div className="ColFlexWrap">
                        <Photo pic={Test} caption="Testing..." ht='30.5vh' />
                        <Photo pic={Test} caption="Testing..." ht='30.5vh' />
                    </div>

                    <div className="ColFlexWrap">
                        <Photo pic={Test} caption="Testing..." ht='30.5vh' />
                        <Photo pic={Test} caption="Testing..." ht='30.5vh' />
                    </div>

                </div>

            </div>

            {/* Contact Me Footer at the very end of the page's viewport */}
            <Contact />
        </div>
    );
}

export default Gallery;