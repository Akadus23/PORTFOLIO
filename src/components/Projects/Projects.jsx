import React from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";

export default function Projects(){

let central = <>
                <div class="w-full h-full" >
                    <h1>Projects</h1>

                </div>

            </>




    return (
        <section id="projects">
            <div class="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1fr] h-auto my-10" >
                <Column fondo="bg-transparent"/>
                <div class=" w-full h-full " >
                    <h1 class="text-3xl text-white" >Projects<span class="text-[#ffb703]">.</span> </h1>
                    <div class="w-full h-auto flex justify-center ">
                        <div class="flex flex-row flex-wrap justify-start gap-10 mx-24 mt-16 w-[100vh] ">
                            <Card
                            id="RocketParts"
                            nombre="Rocketparts"
                            descripcion="Ecommerce enfocado en venta de partes y componentes de computadoras."
                            fondo="/static/img/rocketparts.jpg"
                            deploy="https://rocketparts-frontt-ohfz.vercel.app/"
                            github="https://github.com/Akadus23/ROCKETPARTS-FRONT"
                            skills={[
                                {nombre: "JavaScript", src: "/static/img/js.png"},
                                {nombre: "React",src:  "/static/img/react.png"},
                                {nombre: "Redux",src: "/static/img/redux.png"},
                                {nombre: "NodeJS",src: "/static/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/static/img/postgresql.png"},
                                {nombre: "Tailwind",src: "/static/img/tailwind.png"}]
                            }
                            />
                            <Card
                            id="All Market"
                            nombre="All Market"
                            descripcion="Ecommerce de productos variados."
                            fondo="/static/img/allmarket.jpg"
                            deploy="https://e-commerce-front-alpha.vercel.app/home"
                            github="https://github.com/Akadus23/E-COMMERCE-FRONT"
                            skills={[
                                {nombre: "JavaScript", src: "/static/img/js.png"},
                                {nombre: "React",src:  "/static/img/react.png"},
                                {nombre: "Redux",src: "/static/img/redux.png"},
                                {nombre: "Node",src: "/static/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/static/img/postgresql.png"}]
                            }
                            />
                            <Card
                            id="Koalaxy"
                            nombre="Koalaxy"
                            descripcion="Ecommerce de distribución digital de videojuegos."
                            fondo="/static/img/koalaxy.jpg"
                            deploy="https://koalaxy-app-xmxs.vercel.app/"
                            github="https://github.com/Koalaxy-PF/PF_VIDEOGAMES"
                            skills={[
                                {nombre: "JavaScript", src: "/static/img/js.png"},
                                {nombre: "React",src:  "/static/img/react.png"},
                                {nombre: "Redux",src: "/static/img/redux.png"},
                                {nombre: "Node",src: "/static/img/node.png"},
                                {nombre: "PostgreSQL",src:  "/static/img/postgresql.png"},
                                {nombre: "Tailwind",src: "/static/img/tailwind.png"}]
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