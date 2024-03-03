import { Link } from "react-router-dom";


function Contact() {
    // function to scroll to top of website
    // used with buttons on click function
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ marginTop: '30vh' }}>
            <div style={{ width: '100vw', backgroundColor: '#36454f', padding: '3vmin', borderTopColor: '#f4f1de', borderTopStyle: 'solid', borderTopWidth: '0.25vmin' }}>
                <div className="RowFlexWrap" style={{ alignItems: 'flex-start' }}>

                    <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ alignItems: 'start', gap: '1vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>

                        <div><h1 style={{ paddingBottom: '1vmin' }}>Richik Sinha</h1></div>

                        <div style={{ maxWidth: '23vmax' }}>
                            <p>
                                To keep up with my career, follow some of my social media handles
                            </p>
                            <p>
                                To alert me for my services or help, message me through some of my official contacts
                            </p>
                        </div>

                    </div>

                    <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ alignItems: 'start', gap: '1.5vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>

                        <div><h2 style={{ paddingBottom: '1vmin' }}>Website Links</h2></div>

                        <div><Link to="/" className="LeftToCenter" onClick={toTop}>Home</Link></div>

                        <div><Link to="/about" className="LeftToCenter" onClick={toTop}>About</Link></div>

                        <div><Link to="/projects" className="LeftToCenter" onClick={toTop}>Projects</Link></div>

                        <div><Link to="/blog" className="LeftToCenter" onClick={toTop}>Blog</Link></div>

                    </div>

                    <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ alignItems: 'start', gap: '1.5vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>

                        <div><h2 style={{ paddingBottom: '1vmin' }}>Contact Info</h2></div>

                        <div><a href="https://www.linkedin.com/in/richik-sinha/" target="_blank" rel="noreferrer">LinkedIn</a></div>

                        <div><a href="mailto:richik.main@gmail.com" target="_blank" rel="noreferrer">Email</a></div>

                        <div>
                            <p>
                                Kolkata - West Bengal,
                            </p>
                            <p>
                                India
                            </p>
                        </div>

                    </div>

                    <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ alignItems: 'start', gap: '1vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>

                        <div><h2 style={{ paddingBottom: '1vmin' }}>Social Media</h2></div>

                        <div><a href="https://github.com/Rickisterr" target="_blank" rel="noreferrer">Github</a></div>

                        <div><a href="https://www.instagram.com/richirs_/" target="_blank" rel="noreferrer">Instagram</a></div>

                    </div>

                </div>

            </div>

            <div style={{ backgroundColor: '#212a31', paddingLeft: '1.5rem', paddingBlock: '0.3rem' }}>
                <p>&copy; 2023 - Richik Sinha</p>
            </div>

        </div>
    );
}

export default Contact;