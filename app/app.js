import React from 'react'
import { useState } from 'react'

export default function App() {
    let offsetX, offsetY
    const [localTarget, setLocalTarget] = useState(null)

    function move(e) {
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        el.style.top = `${e.pageY - offsetY}px`
    }
    function add(e) {
        const el = e.target
        //ClientX is the where the click happened in the viewport.
        //getBoundingClientRect().left is the left edge of the current element.
        offsetX = e.clientX - el.getBoundingClientRect().left
        offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)
    }

    function remove(e) {
        console.log("remove()", e.target)
        const elr = e.target
        elr.removeEventListener('mousemove', move)
    }

    const myStyles = "width: 50px height: 50px borderRadius: 29px boxShadow: 0 0 6px position: absolute top: 40px left: 227px backgroundColor: rgb(0, 0, 0, 0.5) cursor: pointer"

    return (
        <div style={{ width: "50px", height: "50px", borderRadius: "29px", boxShadow: "0 0 6px", position: "absolute", top: "40px", left: "227px", backgroundColor: "rgb(0, 0, 0, 0.5)", cursor: "pointer" }}
            onMouseDown={add}
            onMouseUp={remove} />
    )
}