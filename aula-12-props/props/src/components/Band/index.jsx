import React from "react";
import Style from "./Band.module.css"

function Band({imagem, nome, descricao}) {
    return (
        
        <section className={Style.Band}>
        <div className="Band">
            <img src={imagem} alt={nome}></img>
            <div className="Bandinfo">
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
        </section>
    
)

}
export default Band;