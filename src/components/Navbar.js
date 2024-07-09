import React from "react"
import airbnbLogo from '../images/airbnb-logo2.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo"/>
        </nav>
    )
}