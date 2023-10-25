import React from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";

export default function Projects(){

let central = <>
                <div class="w-full h-full" >
                    <h1>Projects</h1>

                </div>

            </>

let rocketSkills = [
    {nombre: "JavaScript", src: "/src/img/js.png"},
    {nombre: "React",src:  "/src/img/react.png"},
    {nombre: "Redux",src: "/src/img/redux.png"},
    {nombre: "Node",src: "/src/img/node.png"},
    {nombre: "PostgreSQL",src:  "/src/img/postgresql.png"},
    {nombre: "Tailwind",src: "src/img/tailwind.png"}]


    return (
        <section>
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr] min-h-[91vh] h-auto my-10" >
                <Column fondo="bg-transparent"/>
                <div class=" w-full h-full " >
                    <h1 class="text-3xl text-white" >Projects<span class="text-[#ffb703]">.</span> </h1>
                    <div class="w-full h-auto flex justify-center ">
                        <div class="flex flex-row flex-wrap justify-center gap-14 mx-24 mt-16 w-[70vh] ">
                            <Card
                            id="RocketParts"
                            nombre="Rocketparts"
                            descripcion="Ecommerce enfocado en venta de partes y componentes de computadoras."
                            fondo="/src/img/rocketparts.jpg"
                            deploy="https://rocketparts-frontt-ohfz.vercel.app/"
                            github="https://github.com/Akadus23/ROCKETPARTS-FRONT"
                            skills={[
                                {nombre: "JavaScript", src: "/src/img/js.png"},
                                {nombre: "React",src:  "/src/img/react.png"},
                                {nombre: "Redux",src: "/src/img/redux.png"},
                                {nombre: "NodeJS",src: "/src/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/src/img/postgresql.png"},
                                {nombre: "Tailwind",src: "src/img/tailwind.png"}]
                            }
                            />
                            <Card
                            id="All Market"
                            nombre="All Market"
                            descripcion="Ecommerce de productos variados."
                            fondo="/src/img/allmarket.jpg"
                            deploy="https://e-commerce-front-alpha.vercel.app/home"
                            github="https://github.com/Akadus23/E-COMMERCE-FRONT"
                            skills={[
                                {nombre: "JavaScript", src: "/src/img/js.png"},
                                {nombre: "React",src:  "/src/img/react.png"},
                                {nombre: "Redux",src: "/src/img/redux.png"},
                                {nombre: "Node",src: "/src/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/src/img/postgresql.png"}]
                            }
                            />
                            <Card
                            id="Koalaxy"
                            nombre="Koalaxy"
                            descripcion="Ecommerce de distribución digital de videojuegos."
                            fondo="/src/img/koalaxy.jpg"
                            deploy="https://koalaxy-app-xmxs.vercel.app/"
                            github="https://github.com/Koalaxy-PF/PF_VIDEOGAMES"
                            skills={[
                                {nombre: "JavaScript", src: "/src/img/js.png"},
                                {nombre: "React",src:  "/src/img/react.png"},
                                {nombre: "Redux",src: "/src/img/redux.png"},
                                {nombre: "Node",src: "/src/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/src/img/postgresql.png"},
                                {nombre: "Tailwind",src: "src/img/tailwind.png"}]
                            }
                            />
                            <Card
                            id="PokeSearch"
                            nombre="Rocketparts"
                            descripcion="Ecommerce enfocado en venta de partes y componentes de computadoras."
                            fondo="/src/img/rocketparts.jpg"
                            deploy="https://rocketparts-frontt-ohfz.vercel.app/"
                            github="https://github.com/Akadus23/ROCKETPARTS-FRONT"
                            skills={[
                                {nombre: "JavaScript", src: "/src/img/js.png"},
                                {nombre: "React",src:  "/src/img/react.png"},
                                {nombre: "Redux",src: "/src/img/redux.png"},
                                {nombre: "Node",src: "/src/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/src/img/postgresql.png"},
                                {nombre: "Tailwind",src: "src/img/tailwind.png"}]
                            }
                            />

                        </div>
                    </div>

                </div>
                <Column fondo="bg-transparent"/>
            </div>
        </section>
    )
}