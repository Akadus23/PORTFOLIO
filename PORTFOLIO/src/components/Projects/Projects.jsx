import React from "react";
import Column from "../Column/Column";

export default function Projects(){

let content = <>
                <div class="border-2" >

                </div>

            </>

    return (
        <section>
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[91vh] mt-10" >
                <Column fondo="bg-transparent"/>
                <Column fondo="bg-transparent"
                />
                <Column fondo="bg-transparent"/>
            </div>
        </section>
    )
}