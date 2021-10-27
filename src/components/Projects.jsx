import {CodeIcon} from "@heroicons/react/solid";
import React from "react";
import {projects} from "../data";

export default function Projects() {
    return (
        <section id="projects" className={"text-gray-400 bg-white body-font"}>
            <div className={"container px-5 py-10 mx-auto text-center lg:px-40 bg-gray-900"}>
                <div className={"flex flex-col w-full mb-20"}>
                    <CodeIcon className={"mx-auto inline-block w-10 mb-4"}/>
                    <h1 className={"sm:text-4xl text-3xl font-medium title-font mb-4 text-white"}>
                        Apps I've Built
                    </h1>
                    <p className={"lg:w-2/3 mx-auto leading-relaxed text-base"}>
                        Random Stuff I've done
                    </p>
                </div>
                <div className={"flex flex-wrap justify-center"}>
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className={"sm:w-1/2 w-100 p-4"}>
                            <div
                                className={"flex relative bg-random3 absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-500"}>
                                <div
                                    className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className={"flex justify-center pt-8"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto inline-block w-10 mb-4 text-black "
                     viewBox="0 0 20 20"
                     fill="currentColor">
                    <path
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
            </div>
            <div className={"flex justify-center pt-2"}>
                <h1 className={"sm:text-6xl text-4xl font-bold title-font mb-4 text-black "}>
                    Skills
                </h1>
            </div>
            <div className={"justify-center flex"}>
                <p className={"lg:w-2/3 mx-auto leading-relaxed text-gray-700 text-xl"}>
                    My current skills
                </p>
            </div>
            <div className={"w-64 p-6"}>

            </div>

        </section>
    );
}