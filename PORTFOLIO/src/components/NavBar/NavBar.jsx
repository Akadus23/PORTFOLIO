import {Link} from 'react-router-dom';
import React from "react";

export default function NavBar(){

    return(
        <div class="w-[100%] h-12 flex flex-row">
            <div class="w-1/2 h-12 m-4 ml-36 pl-44  text-2xl text-white font-extrabold">
                
                <p><span class="text-[#ffb703]">{"<"}</span>Akadus<span class="text-[#ffb703]">{">"}</span></p>
            </div>
            <div class="w-1/2 h-12 m-4 mr-36 px-44  flex flex-row  gap-12 justify-around items-center text-lg text-white font-extrabold">
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