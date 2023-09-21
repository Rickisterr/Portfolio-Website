import Contact from "../Contact";
import PFP from '../Resources/ProfilePic.jpeg';
import { Link } from "react-router-dom";


function Projects() {
    const contentwidth = '50vmax';

    return (
        <div className='Wrapper' style={{ height: 'min-content' }}>
            <div>
                <div className='ColFlexWrap' style={{ paddingInline: '7vw', paddingBlockStart: '10vh', gap: '10vmin' }}>
                    <h1 className='WhiteNormText Title' id="SammardWorksid">PROJECTS</h1>
                    <div className='RowFlexWrap RowFlexWrapReverse' style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '0vmin' }}>
                        <div>
                            <h1 className='WhiteNormText Headings'>Team Sammard Works</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: contentwidth }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Consequat interdum varius sit amet. Porta nibh venenatis cras sed felis. Erat velit scelerisque in dictum non. Posuere morbi leo urna molestie at elementum eu. Faucibus et molestie ac feugiat. Velit dignissim sodales ut eu sem. Sed ullamcorper morbi tincidunt ornare. Bibendum neque egestas congue quisque egestas diam in. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elementum facilisis leo vel fringilla est.
                                Pretium viverra suspendisse potenti nullam. Lectus quam id leo in vitae. Risus nullam eget felis eget. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. In egestas erat imperdiet sed euismod. Pharetra massa massa ultricies mi quis hendrerit. Blandit libero volutpat sed cras. At elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla.
                            </p>
                        </div>
                        <div>
                            <img alt="Richik Sinha" src={PFP} loading="lazy" style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                        </div>
                    </div>
                    <div className='RowFlexWrap RowFlexWrapReverse' id="Portfolioid" style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '12vmin' }}>
                        <div>
                            <img alt="Richik Sinha" src={PFP} loading="lazy" style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                        </div>
                        <div>
                            <h1 className='WhiteNormText Headings'>Portfolio Website</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: contentwidth }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Consequat interdum varius sit amet. Porta nibh venenatis cras sed felis. Erat velit scelerisque in dictum non. Posuere morbi leo urna molestie at elementum eu. Faucibus et molestie ac feugiat. Velit dignissim sodales ut eu sem. Sed ullamcorper morbi tincidunt ornare. Bibendum neque egestas congue quisque egestas diam in. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elementum facilisis leo vel fringilla est.
                                Pretium viverra suspendisse potenti nullam. Lectus quam id leo in vitae. Risus nullam eget felis eget. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. In egestas erat imperdiet sed euismod. Pharetra massa massa ultricies mi quis hendrerit. Blandit libero volutpat sed cras. At elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla.
                            </p>
                        </div>
                    </div>
                    <div className='RowFlexWrap RowFlexWrapReverse' id="TicTacToeid" style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '12vmin' }}>
                        <div>
                            <h1 className='WhiteNormText Headings'>Tic Tac Toe Project</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: contentwidth }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Consequat interdum varius sit amet. Porta nibh venenatis cras sed felis. Erat velit scelerisque in dictum non. Posuere morbi leo urna molestie at elementum eu. Faucibus et molestie ac feugiat. Velit dignissim sodales ut eu sem. Sed ullamcorper morbi tincidunt ornare. Bibendum neque egestas congue quisque egestas diam in. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elementum facilisis leo vel fringilla est.
                                Pretium viverra suspendisse potenti nullam. Lectus quam id leo in vitae. Risus nullam eget felis eget. Feugiat scelerisque varius morbi enim nunc faucibus a. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. In egestas erat imperdiet sed euismod. Pharetra massa massa ultricies mi quis hendrerit. Blandit libero volutpat sed cras. At elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla.
                            </p>
                        </div>
                        <div>
                            <img alt="Richik Sinha" src={PFP} loading="lazy" style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Projects;