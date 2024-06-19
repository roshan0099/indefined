import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Display from "../components/Display/Display";
import PageBreak from "../components/Display/PageBreak";
function Home() {
    return(
        <>
        <Navbar></Navbar>
        <Display></Display>
        <PageBreak></PageBreak>
        </>
    )
}

export default Home