
function Laptop(props) {

    return (
        <div style={{ transform: props.scale }}>
            <svg version="1.1" viewBox="0 0 209.24 148.51" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-.36276 -58.714)">
                    <g transform="matrix(1.5976 0 0 1.543 -57.301 -73.884)">
                        <rect x="38.156" y="85.938" width="124.78" height="85.938" rx="4.125" ry="3.7812" fill="#808080" stroke-width=".26458" />
                        <g transform="matrix(1 0 0 1.0184 0 -3.3603)">
                            <rect x="36.094" y="174.62" width="130.97" height="7.5625" rx="6.1875" ry="3.7812" fill="#808080" stroke-width=".26458" />
                            <rect x="43.312" y="96.594" width="114.81" height="67.719" rx="0" ry="0" stroke-width=".26458" />
                            <circle cx="100.5" cy="91.5" r="2.5" stroke-width=".32873" />
                            <text x="45.375" y="103.125" fill="#00ff00" font-size="6px" stroke-width=".26458"><tspan x="45.375" y="103.125">&gt; {props.display}</tspan><tspan x="45.375" y="107.09375" /></text>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Laptop;