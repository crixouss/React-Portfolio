import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"flex justify-between py-1 px-5 border-b-4 w-full border-purple-500 w-full absolute sticky"}>
            <div className={"logo"}>
                    <h2 className={"text-3xl"}>
                        <Link to={"/"}>HomeMain</Link>
                    </h2>
            </div>

                <nav className={"flex content-center flex-wrap"}>
                    <ul className={"flex"}>
                        <li className={"mr-5 text-xl"}>
                            <Link to={"/"}><b>Home</b></Link>
                        </li>
                        <li className={"mr-5 text-xl"}>
                            <Link to={"/projects"}><b>Projects</b></Link>
                        </li>

                        <li className={" text-xl"}>

                            <Link to={"/hire"}><b>Hire</b></Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}
export default Header