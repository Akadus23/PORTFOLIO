import { Link } from 'react-scroll';
import React from "react";

export default function NavBar() {

    return (
        <header class="fixed top-0 left-0 w-[100%] bg-[#140152]/70 backdrop-blur-2xl z-10 border-b-2 border-[#22007C] ">
            <nav class="flex justify-between p-3 max-w-[1300px] my-0 mx-auto">
                <div class=" flex items-center  text-2xl text-white font-extrabold">
                    <p><span class="text-[#ffb703] text-xl">{"<"}</span>Akadus<span class="text-[#ffb703] text-xl">{">"}</span></p>
                </div>
                <div class="   text-lg text-white font-extrabold">
                    <button class=" block md:hidden " aria-label='Abrir menú' >
                        <span class="material-symbols-outlined">Close</span>
                    </button>
                    <ul class="flex flex-col top-0 left-0 items-center w-full h-full overflow-y-auto bg-[#140152] md:bg-inherit fixed list-none m-0 p-0 md:flex-row md:relative  md:h-auto" >
                        <li class=" md:px-4 py-0" ><Link to="home" spy={true} smooth={true} offset={-70} duration={500} ><a href='#home' class="text-xl leading-10 md:leading-4">Home</a></Link></li>
                        <li class=" md:px-4 py-0" ><Link to="about" spy={true} smooth={true} offset={-70} duration={500} ><a href='#about' class="text-xl leading-10 md:leading-4">About</a></Link></li>
                        <li class=" md:px-4 py-0" ><Link to="projects" spy={true} smooth={true} offset={-70} duration={500} ><a href='#projects' class="text-xl leading-10 md:leading-4">Projects</a></Link></li>
                        <li class=" md:px-4 py-0" ><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} ><a href='#contact' class="text-xl leading-10 md:leading-4">Contact me</a></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};