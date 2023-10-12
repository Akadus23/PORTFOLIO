import React from "react";
import Column from "../Column/Column";


export default function Home () {

    let central =
        <div class="grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] w-[100%] h-[100%] ">
            <div class=" flex flex-col items-center justify-center">
                <div class=" w-2/3 h-1/2 grid grid-cols-[1fr] grid-rows-[repeat(4,1fr)]]">
                    <div class=" text-white text-2xl flex items-end justify-start  " >Hi! I'm Davinson</div>
                    <div class=" text-white text-[35px] flex items-end justify-start  " >Full Stack Developer</div>
                    <div class=" text-white text-2xl flex items-end justify-start  " >Isn't it fun to create?</div>
                    <div class=" flex flex-row items-center content-center justify-start" >
                        <button class="w-28 h-12 border-2 "> Resume </button>
                        
                        <button class="w-28 h-12 border-2 ml-5"> Projects </button>
                    </div>
                </div>
            
                
            </div>
            
        </div>

    return(
        <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[91vh] mt-10" >
            <Column fondo="bg-transparent"/>
            <Column fondo="bg-transparent"
            content={central}
            />
            <Column fondo="bg-transparent"/>
        </div>
    )
}