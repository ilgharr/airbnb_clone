import React from "react"
import hero_img from "../images/hero.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero_img} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}