import React from "react";

// import logo1 from "./images/avatar.svg"


function About (){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col">
                <div className="title-font mb-4 text-white sm:text-3xl text-3xl font-medium">
                    <h1 className="sm:text-3xl text-3xl mb-20 font-medium text-white">
                        Nate Traugh ||
                        <br className="hidden mt-3lg:inline-block text-gray" /> Full Stack Web Developer
                    </h1>
                    <h2 className="mb-8 text-blue-500">About me:</h2>
                    <p className="mb-8 leading-loose">Hello, welcome to my portfolio. My name is Nate Traugh and I'm a professional web developer proficient in Javascipt, Node.js, React, MYSQL and more. Take a look at some of the main projects
                    below and dont forget to checkout the GitHub for all the completed projects.
                    </p>
                    <div className="flex">
                        <a href="#projects" className="
                        inline-flex text-white bg-blue-500 border-0 py-2 px-2 hover:bg-white hover:text-blue-500 rounded">Projects</a>
                        <a href="#contact" className="
                        inline-flex text-white bg-blue-500 border-0 py-2 px-4 hover:bg-white hover:text-blue-500 ml-4 rounded">Contact Me</a>
                    </div>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center"
                    alt="avatar" src={logo1}></img>
                </div> */}
            </div>



        </section>
    )
}



export default About;