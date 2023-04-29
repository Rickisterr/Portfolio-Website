import './Content.css';

function Content(props) {

    return (
        <div className="ContentWrap ColFlexWrap" style={{ minWidth: props.contentwidth, minHeight: props.contentheight, maxWidth: props.contentwidthmax, padding: '4vw' }}>
            <div>
                <p style={{ color: 'white', textAlign: props.textalign ? props.textalign : props.text1align }}>{props.text1}</p>
            </div>
            <div>
                <p style={{ color: 'white', textAlign: props.textalign ? props.textalign : props.text2align }}>{props.text2}</p>
            </div>
            <div>
                <p style={{ color: 'white', textAlign: props.textalign ? props.textalign : props.text3align }}>{props.text3}</p>
            </div>
            <div>
                <p style={{ color: 'white', textAlign: props.textalign ? props.textalign : props.text4align }}>{props.text4}</p>
            </div>
        </div>
    );
}

export default Content;

/*
Usage::
    <Content
        contentwidth="20vw"
        contentwidthmax="25vw"
        contentheight="70vh"
        text1=""
        text1align="left"
        text2=""
        text2align="left"
        text3=""
        text3align="left"
        text4=""
        text4align="left"
    />
*/