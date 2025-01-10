import React from "react";
import Hero from "./hero";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";
import Nav from './nav'


export default function Home(){

    return (

        <main className="">
            <Nav/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </main>

    )

}