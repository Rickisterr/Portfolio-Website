

function Contact() {
    return (
        <div style={{ width: '100vw', backgroundColor: '#36454f', padding: '3vmin', borderTopColor: '#fffffa', borderTopStyle: 'solid', borderTopWidth: '0.25vmin' }}>
            <div className="RowFlexWrap" style={{  }}>
                <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ gap: '5vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>
                    <div><a href="https://www.linkedin.com/in/richik-sinha/">LinkedIn</a></div>
                    <div><a href="https://github.com/Rickisterr">Github</a></div>
                </div>
                <div className="ColFlexWrap WhiteNormText Paragraphs" style={{ gap: '5vmin', paddingBlockEnd: '10vmin', paddingBlockStart: '2.5vmin' }}>
                    <div><a href="mailto:sinha.richik@gmail.com">Email</a></div>
                    <div><a href="https://www.instagram.com/richirs_/">Instagram</a></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;