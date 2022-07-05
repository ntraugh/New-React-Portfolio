// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import GitHub from "../images/mark.png"
import logo2 from "../images/Logo.png"


function Navbar (){
    return (
        <header className="bg-gray-800 sm:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row  items-center">
                <a className="font-medium text-white mb-2 sm:mb-0">
                        <a href="#about" className= "text-xl  hover:text-gray-400">
                            About
                        </a>
                    </a>
                    <nav className=" font-medium text-white mb-2 sm:mb-0">
                        <a href="#projects" className="ml-4 text-xl  hover:text-gray-400">
                            Projects
                        </a>
                        <a href="#Contact" className="ml-4 text-xl  hover:text-gray-400">
                            Contact
                        </a>
                    </nav>
                    <a href="https://github.com/ntraugh">
                        <img src={GitHub} alt="GitHub" className="w-8 h-8 inline-flex hover:grow-2 ml-4 sm: mt-0"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/nate-traugh-7bb18a20a/">
                        <img src={logo2} alt="LinkedIn" className="w-100 h-8 inline-flex ml-4 hover:grow-2 sm: mt-0"></img>
                    </a>
            </div>




        </header>
    )
}



export default Navbar;