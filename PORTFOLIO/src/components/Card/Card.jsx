import React from "react";

export default function Card ({id, nombre, descripcion, fondo, skills, github, deploy}) {

    const backgroundImageStyle = {
        backgroundImage: `url(${fondo})`,
      };

      const abrirGithub = () => {
        window.open(github, '_blank');
      }
      const abrirDeploy = () => {
        window.open(deploy, '_blank');
      }
    return (
        <div id={id} class="w-[30vh] h-[40vh] rounded-[5px] bg-transparent hover:bg-[#1d1d54] ">
            <div class="w-full h-2/5 bg-blue-400 rounded-[5px] bg-cover" style={backgroundImageStyle} > 
            </div>
            <p class="mt-2 ml-2 text-white" >{nombre}<span class="text-[#ffb703] " >:</span> </p>
            <p class="text-white ml-2 text-sm mt-1" >{descripcion}</p>
            <div class="mt-2 gap-2 ml-2 flex flex-row flex-wrap ">
                {
                    skills?.map((e, k) => {
                        return( 
                            <div key={k} class="text-xs bg-[#22007C] text-white font-mono rounded-[2px] w-fit p-1.5 h-7 flex flex-row gap-2 ">
                                <img src={e.src} class="w-4 h-4"></img>
                                {e.nombre} 
                                </div>
                            )
                    })
                }
            </div>
            <div class="flex flex-row justify-center mt-2 gap-4" >
                <button onClick={abrirGithub} class="w-10 h-10 border-2 rounded-md border-[#ffb703] text-[#ffb703] flex items-center justify-center "><a href={github} target="_blank" ></a> <img src="/src/img/github.png" class=" w-6 " ></img> </button>
                <button onClick={abrirDeploy} class="w-10 h-10 border-2 rounded-md border-[#ffb703] text-[#ffb703] flex items-center justify-center "><a href={deploy}></a> <img src="/src/img/flecha.png" class=" w-6 " ></img> </button>
            </div>
        </div>
    )
}