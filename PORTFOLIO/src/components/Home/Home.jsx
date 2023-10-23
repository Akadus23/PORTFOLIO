import React from "react";
import Column from "../Column/Column";



export default function Home () {

    let central =
        <div class="grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] w-[100%] h-[100%] z-0">
            <div class=" flex flex-col items-center justify-center ">
                <div class=" w-[100%] h-2/5 grid grid-cols-[1fr] grid-rows-[repeat(4,1fr)]] text-left ">
                    <div class="  text-orange-200 text-2xl flex gap-2 content-end items-end justify-start translate-y-5 " ><span class="text-white" >Hi!</span>I'm Davinson</div>
                    <div class=" -ml-1 text-[56px] h-20  bg-clip-text text-transparent bg-gradient-to-r from-[#ffb703] to-[#4502ff] " >  Full Stack Developer</div>
                    <div class=" text-orange-200 text-2xl -translate-y-6 " >Isn't it fun to create?</div>
                    <div class="  flex flex-row items-center content-start justify-start -translate-y-5" >
                        <button class="w-28 h-12 border-2 rounded-md border-[#ffb703] text-[#ffb703] "> Resume </button>
                        
                        <button class="w-28 h-12 border-2 rounded-md border-[#ffb703] text-[#ffb703] ml-5"> {"Projects ->"} </button>
                    </div>
                </div>
            
                
            </div>
            <div class=" flex flex-col items-center justify-center " >
                <div class="w-96 h-96 relative ">
                <div class="w-96 h-96 outline-dashed outline-offset-2 animate-spin outline-[#4400ff] rounded-full bg-cover absolute  bg-right-top  " >
                </div>
                    <div class="w-96 h-96 rounded-full bg-cover bg-right-top object-cover" style={{ backgroundImage: 'url("/foto2.jpg")' }}>

                    </div>

                </div>
            </div>
            
        </div>

    return(
        <section>
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[91vh] mt-10" >
                <Column fondo="bg-transparent"/>
                <Column fondo="bg-transparent"
                content={central}
                />
                <Column fondo="bg-transparent"/>
            </div>
        </section>
    )
}