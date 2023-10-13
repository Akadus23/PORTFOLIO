import React from "react";
import Column from "../Column/Column";


export default function Home () {

    let central =
        <div class="grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] w-[100%] h-[100%] ">
            <div class=" flex flex-col items-center justify-center ">
                <div class=" w-[100%] h-2/5 grid grid-cols-[1fr] grid-rows-[repeat(4,1fr)]]  text-left">
                    <div class="  text-white text-2xl flex  content-end items-end justify-start translate-y-5" >Hi! I'm Davinson</div>
                    <div class=" -ml-1 text-[56px] h-20  bg-clip-text text-transparent bg-gradient-to-r from-[#22007C] to-[#531fff] " >  Full Stack Developer</div>
                    <div class=" text-white text-2xl -translate-y-6 " >Isn't it fun to create?</div>
                    <div class="  flex flex-row items-center content-start justify-start" >
                        <button class="w-28 h-12 border-2 rounded-md border-[#ffb703] text-[#ffb703] "> Resume </button>
                        
                        <button class="w-28 h-12 border-2 rounded-md border-[#ffb703] text-[#ffb703] ml-5"> {"Projects ->"} </button>
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