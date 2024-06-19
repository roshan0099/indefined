import { useState } from "react"



function Navbar({trigger, setTrigger}){

    const styles = {
        backgroundColor : "#FBF9F4"
    }

    // const [trigger, setTrigger] = useState(false)
    
    function mobDisplayMenu(){
        setTrigger(!trigger)
    }
    return(
        <>
        <nav className={`fixed top-0 w-full  ${trigger ? 'h-full duration-300 bg-orange-100' : 'h-20 duration-700 bg-white'} transition-all ease-in-out `}>
            <div className="m-3 flex justify-between p-4 md:block">
                <div className=" md:flex md:flex-row md:justify-around ">

                    <div className="text-3xl">Indefined&gt;</div>
                    <ul className={`text-xl mt-10 ${trigger ? 'opacity-1 ' : 'transform -translate-x-44 top-0'} md:m-0 md:flex transition-all ease-in-out duration-500 md:translate-x-0`}>
                        <li className="m-2 hover:text-green-800"><a href="">Solutions</a></li>
                        <li className="m-2 max-sm:mt-4 hover:text-green-800 md:ml-6"><a href="">Pricing</a></li>
                        <li className="m-2 max-sm:mt-4 hover:text-green-800 md:ml-6 "><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className="cursor-pointer mt-1 md:hidden" onClick={mobDisplayMenu}>

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" >
                    <g className="transition-all ease-in-out duration-700">
                        {!trigger ? (
                            <path key="pathA" d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        ) : (
                            <path key="pathB" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                        )}
                    </g>
                </svg>

                </div>
            </div>

            

            
        </nav>
        </>
    )
}

export default Navbar