import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };

const App = () => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition);

    // Everytime the mouse move, this FUNCTION is invoked. 
    // When FUNCTION is invoked, the STATE changes. 
    // When STATE changes, it AUTO RE-RENDERS the app. 
    // The object mousePosition in STATE is what got set in FUNCTION INVOKED
    // This is NOT optimal as everytime you move your mouse, it gets INVOKED again. 
    // EVERYTIME the APP is re-rendered, the handleMouseMove function is SET to a NEW function with a newly defined CLOSURE
    // It is UNREGISTERING THE OLD VERSION of the handleMouseMove and registering the NEW VERSION again and again
    // We should stop this from happening by using useCallback
    // setMousePosition doesn't CHANGE in very re-render
    // NOW with useCallback, handleMouseMove is NOT reset and is added ONLY ONCE
    const handleMouseMove = useCallback(event => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    }, [setMousePosition]);

    return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r={circleRadius}
            />
        </svg>
    );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);