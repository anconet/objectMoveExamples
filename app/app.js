
//import React from "react";
//`import logo from "./logo.svg";
import "./App.css";
import useDrag from "./useDrag";
import { useRef, useState } from "react";

function MyTask(props) { return <div style={props.style}>Task</div> }

export default function App() {
    const divRef = useRef();

    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleDrag(e) {
        setPosition({
            x: position.x + e.movementX,
            y: position.y + e.movementY
        });
    };

    //const drag = useDrag(divRef, [translate], { onDrag: handleDrag });
    useDrag(divRef, [position], { onDrag: handleDrag });

    //BS...
    // {!drag.isDragging && <p>Drag it ☝️</p>}
    // {drag.isDragging && <p>Ooh such drag 😎</p>}
    //<img src={logo} className="App-logo" alt="logo" />


    return (
        <div className="App">
            <header className="App-header">
                <div ref={divRef}
                    style={{
                        transform: `translateX(${position.x}px) translateY(${position.y}px)`
                    }}>
                    <MyTask style={{
                        userSelect: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        height: "48px",
                        width: "200px",
                        color: "red",
                        background: "yellow"
                    }}></MyTask>
                </div>
            </header >
        </div >
    );
}