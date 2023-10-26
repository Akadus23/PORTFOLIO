import React from "react";
import Column from "../Column/Column";

export default function About () {

    let central =   <div class="grid grid-cols-[1fr] grid-rows-[repeat(2,1fr)] w-full h-full " >
                        <div class="w-full h-full  pt-10 " >
                            <h1 class="text-3xl text-white" >About<span class="text-[#ffb703]" >.</span></h1>
                            <p class=" text-slate-300 pt-10 text-xl" >My name is Davinson Villamizar, I am a passionate developer who seeks to mix and innovate through his passions: sports, video games and programming. Based in Bogotá, Colombia. I am always looking for new challenges and knowledge. </p>
                            <h3 class="pt-20 text-xl text-white" >Skills</h3>
                        </div>
                        <div class="w-full h-full flex flex-row justify-evenly items-center pb-10 gap-2">
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/html.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/css.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/js.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/react.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/redux.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/node.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-3/4 w-3/4" src="/src/img/postgresql.png" alt="" ></img> </div>
                            <div class="w-[130px] h-[130px] shadow-inner shadow-black  border-[#120b2a] rounded-[10px] bg-[#2902AC] flex items-center justify-center hover:scale-110 ease-in duration-150 hover:shadow-md hover:shadow-black " ><img class="h-2/4 w-3/4" src="/src/img/tailwind.png" alt="" ></img> </div>
                        </div>
                    </div>

    return(
            <section>
                <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[91vh] mt-10" >
                    <Column fondo="bg-[#22007C] "/>
                    <Column fondo="bg-[#22007C] " content={central} />
                    <Column fondo="bg-[#22007C] "/>
                </div>
            </section>
    )
}