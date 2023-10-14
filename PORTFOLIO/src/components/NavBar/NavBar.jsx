import {Link} from 'react-router-dom';
import React from "react";

export default function NavBar(){

    return(
        <header class="fixed top-0 left-0 w-[100%] ">
        <nav class="flex justify-between p-3 max-w-[1300px] my-0 mx-auto">
            <div class=" flex items-center  text-2xl text-white font-extrabold">
                <p><span class="text-[#ffb703] text-xl">{"<"}</span>Akadus<span class="text-[#ffb703] text-xl">{">"}</span></p>
            </div>
            <div class="   text-lg text-white font-extrabold">
                <button class=" block md:hidden " aria-label='Abrir menú' >
                <span class="material-symbols-outlined">Close</span>
                </button>
                <ul class="flex flex-col top-0 left-0 items-center w-full h-full overflow-y-auto bg-[#140152] md:bg-inherit fixed list-none m-0 p-0 md:flex-row md:relative  md:h-auto" >
                    <li class=" md:px-4 py-0" ><a href='#home' class="text-xl leading-10 md:leading-4" >Home</a></li>
                    <li class=" md:px-4 py-0" ><a href='#home' class="text-xl leading-10 md:leading-4">About</a></li>
                    <li class=" md:px-4 py-0" ><a href='#home' class="text-xl leading-10 md:leading-4">Projects</a></li>
                    <li class=" md:px-4 py-0" ><a href='#home' class="text-xl leading-10 md:leading-4">Contact me</a></li>
                </ul>
            </div>
        </nav>
        </header>
    )
};