import React from "react";
import Column from "../Column/Column";

export default function Contact() {

    const abrirGithub = () => {
        window.open('https://github.com/Akadus23', '_blank');
    }
    const abrirLinkedin = () => {
        window.open('https://www.linkedin.com/in/davinson-villamizar/', '_blank');
    }

    return (
        <section id="contact">
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[80vh] mt-10" >
                <div class=" flex flex-col items-center justify-end content-center">
                    <div class={`w-[100%] h-5/6 flex-row  bg-[#22007C]`}>
                    </div>
                </div>
                <div class=" flex flex-col items-center justify-end content-center">
                    <div class={`w-[100%] h-5/6 flex-row  bg-[#22007C]`}>
                        <div class="grid grid-cols-2 grid-rows-1 h-full">
                            <div class="flex flex-col justify-center justify-self-end items-start w-2/3" >
                                <h1 class="text-3xl text-white pt-10 ">Contact Me<span class="text-[#ffb703] " >.</span> </h1>
                                <p class="text-slate-300 mt-2" >I'm ready for new challenges, do you dare to meet them with me?</p>
                                <p class="text-slate-300" > Then leave me a message. ;)</p>
                                <div class="w-full flex flex-row items-center gap-2 text-white mt-4"><img class="w-8" src="/src/img/correo.png"></img> davilgo23@gmail.com </div>
                                <div class="w-full flex flex-row items-center gap-2 text-white mt-1"><img class="w-8" src="/src/img/marcador.png"></img> Bogotá, Colombia </div>
                                <div class="flex flex-row mt-4 items-center justify-start gap-4 w-full">
                                    <button onClick={abrirGithub} class="w-14 h-14 border-2 rounded-md border-[#ffb703] text-[#ffb703] flex items-center justify-center "> <img src="/src/img/github.png" class=" w-8 " ></img> </button>
                                    <button onClick={abrirLinkedin} class="w-14 h-14 border-2 rounded-md border-[#ffb703] text-[#ffb703] flex items-center justify-center "> <img src="/src/img/linkedin.png" class=" w-8 " ></img> </button>
                                </div>
                            </div>
                            <div class="w-full flex flex-col justify-center items-center">
                                <div class="bg-[#140152] w-2/3 h-2/3 rounded-lg border-[#450DFD] border-2 ">
                                    <form>
                                        <div class="flex flex-col mx-4 mt-4 gap-1" >
                                            <label class="text-white" for="name">Name:</label>
                                            <input class="rounded-md caret-[#ffb703] border-[#450DFD] border-2 bg-[#22007C] h-8 focus:border-[#ffb703] focus:outline-none pl-1 text-slate-300 text-sm" placeholder="Name" required type="text" name="name" id="name"></input>
                                        </div>
                                        <div class="flex flex-col m-4 gap-1">
                                            <label class="text-white" for="email">Email:</label>
                                            <input class="rounded-md caret-[#ffb703] border-[#450DFD] border-2 bg-[#22007C] h-8 focus:border-[#ffb703] focus:outline-none pl-1 text-slate-300 text-sm" placeholder="Email" required type="email" name="email" id="email"></input>
                                        </div>
                                        <div class="flex flex-col m-4 gap-1">
                                            <label class="text-white" for="message">Message:</label>
                                            <textarea  class="rounded-md caret-[#ffb703] resize-none border-[#450DFD] border-2 bg-[#22007C] focus:border-[#ffb703] focus:outline-none pl-1 text-slate-300 text-sm" placeholder="Message" required name="message" id="message" rows="8"></textarea>
                                        </div>
                                        <button type="submit" class=" bg-[#450DFD] h-10 w-11/12 rounded-md text-white text-xl mx-4">Send</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class=" flex flex-col items-center justify-end content-center">
                    <div class={`w-[100%] h-5/6 flex-row bg-[#22007C] `}>

                    </div>
                </div>
            </div>
        </section>
    )
}