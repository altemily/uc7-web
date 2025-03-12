import React from "react";
import Band from "../Band/index";
import Style from "./Main.module.css"

const bandas = [
    {
        nome:'Banda 1',
        imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao:'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome:'Banda 2',
        imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao:'Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome:'Banda 3',
        imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao:'Descrição da Banda 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome:'Banda 4',
        imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao:'Descrição da Banda 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
    }
]

function Main(){
    return(
         <main className={Style.Main}>
            {
                bandas.map((banda, index) => (
                    <section>
                        <Band key={index} {...banda} />
                    </section>
                ))
            }
        </main>
    )
}

export default Main;