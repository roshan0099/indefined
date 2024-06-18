import { useState } from "react"



function Navbar(){

    const styles = {
        backgroundColor : "#FBF9F4"
    }

    const [trigger, setTrigger] = useState(false)
    
    function mobDisplayMenu(){
        setTrigger(!trigger)
    }
    return(
        <>
        <nav className="fixed top-0 w-full">
            <div className="m-3 flex justify-between p-4 md:block">
                <div className=" md:flex md:flex-row md:justify-around ">

                    <div className="text-3xl">Indefined&gt;</div>
                    <ul className={`text-xl mt-10 ${trigger ? 'block' : 'hidden'} md:m-0 md:flex`}>
                        <li className="m-2 hover:text-green-800"><a href="">Solutions</a></li>
                        <li className="m-2 hover:text-green-800 md:ml-6"><a href="">Pricing</a></li>
                        <li className="m-2 hover:text-green-800 md:ml-6"><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className="cursor-pointer md:hidden" onClick={mobDisplayMenu}>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                    </svg>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar