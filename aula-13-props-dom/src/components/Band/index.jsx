import {React, useState} from "react";
import Style from "./Band.module.css"

function Band({imagem, nome, descricao}) {
    const[like, setLike] = useState(0)
    const[deslike, setDeslike] = useState(0)

    return (
        <section className={Style.Band}>
        <div className="Band">
            <img src={imagem} alt={nome}></img>
            <div className="Bandinfo">
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>Likes: {like}</p>
                <p>Deslikes: {deslike}</p>
            </div>
            <button onClick={() =>setLike(like+1)}>❤️</button>
            <button onClick={() =>setDeslike(deslike+1)}>💔</button>
        </div>
        </section>
    
)

}
export default Band;