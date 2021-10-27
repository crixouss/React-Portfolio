import React from 'react'
import {Link} from "react-router-dom";
import {RainbowHighlight} from "./Highlight.jsx/Highlight";

const Showcase = () => {
    return (
        <div className={"bg-random " +
        "w-screen h-screen bg-center overlay flex flex-col " +
        "items-center justify-center text-white px-5 "}>
            <section>
                <div className={""}>
                    <RainbowHighlight><h1 className={"text-6xl font-semibold text-center mb-5"}>I am currently in
                        the <span
                            className={"text-purple-500"}>developing learning</span> process</h1></RainbowHighlight>

                    <div className={"text-center space-x-8 p-8 m-8"}>
                        <Link to={"/hire"}>
                            <button
                                className="p-4 pl-5 pr-5 bg-purple-500 border-2 border-white text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">
                                Message me!
                            </button>
                        </Link>
                        <Link to={"/projects"}>
                            <button
                                className="p-4 pl-5 pr-5 bg-white border-2 border-purple-500 text-purple-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">My
                                skills?
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Showcase