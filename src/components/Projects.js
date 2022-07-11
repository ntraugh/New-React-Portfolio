import React from "react"
import { projects } from "../projectdata"


function Projects() {
    return (
        <section id="projects">
            <div className="container mx-auto px-5 py-10 text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue-500">Projects</h2>
                    <p className="lg:w-2/3 sm:text-3xl text-4xl mx-auto leading:loose text-base font-medium">
                        Take a look at some of my completed projects below. Click on the pictures for a link to the deployed site.
                    </p>
                </div>
                <div className="flex flex-wrap m-4">
                    {/* map through each project in our project data file to display them one by one */}
                    {projects.map((project) => (
                        <a href={project.link}
                            key={project.image}
                            className="sm:w-1/2 p-4">
                            
                            <div className="flex relative rounded">
                                <img src={project.image} alt="projects" className="absolute inset-0 w-full h-full object-cover rounded"/>
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}



export default Projects;