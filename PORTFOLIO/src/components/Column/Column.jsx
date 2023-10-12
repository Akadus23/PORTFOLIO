import React from "react";

export default function Column ({fondo, content}){
    return (
        <div class=" flex flex-col items-center justify-center content-center">
                <div class={`border-2 w-[100%] h-2/3 flex-row  ${fondo}`}>
                    {
                        content
                    }
                </div>
        </div>
    )
}