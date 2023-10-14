import React from "react";

export default function About () {
    return(
        <div>
            <section>
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr]  h-[91vh] mt-10" >
            <Column fondo="bg-transparent"/>
            <Column fondo="bg-transparent"
            content={central}
            />
            <Column fondo="bg-transparent"/>
        </div>
            </section>
        </div>
    )
}