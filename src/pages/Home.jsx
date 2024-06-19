import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Display from "../components/Display/Display";
import PageBreak from "../components/Display/PageBreak";


function Home() {
    const [trigger, setTrigger] = useState(false)

    return(
        <>
        <Navbar trigger={trigger} setTrigger={setTrigger}></Navbar>
        <Display trigger={trigger}></Display>
        <PageBreak></PageBreak>
        </>
    )
}

export default Home