import {Link} from 'react-router-dom';
import React from "react";

export default function NavBar(){

    return(
        <div class="w-[100%] h-12 flex flex-row">
            <div class="w-1/2 h-12 m-4 ml-36 pl-14 border-red-700 border-4 text-2xl text-white">
                
                <p><span> </span>Hi! I'm Davinson <span> </span></p>
            </div>
            <div class="w-1/2 h-12 m-4 mr-36 pr-14 border-red-700 border-4 flex flex-row justify-center gap-12 content-center text-2xl text-white ">
                    <div>
                        <p>Home</p>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                    <div>
                        <p>Projects</p>
                    </div>
                    <div>
                        <p>Contact me</p>
                    </div>
            </div>
        </div>
    )
};