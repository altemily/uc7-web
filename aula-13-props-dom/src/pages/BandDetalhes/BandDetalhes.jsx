import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "../BandDetalhes/BandDetalhes.module.css"
import bandas from "../../data/bancoBands";
import Band from "../../components/Band/index";
import Header from "../../components/Header/index";
import Aside from "../../components/Aside/index";
import Footer from "../../components/Footer/index";

function BandDetalhes() {
    const { id } = useParams();
    const [curiosidade, setCuriosidade] = useState('');
    
    const band = bandas.find((b) => b.id === parseInt(id));

    if (!band) {
        return (
            <>
                <Header />
                <div className={style.container}>
                <h2>Nenhuma banda encontrada.</h2>
                <div>
                 <Link to={'/'} className={style.link}>Voltar</Link>
                 </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className={style.container}>
            <Band {...band} />
            <p>{curiosidade}</p>
            <button onClick={() =>setCuriosidade(band.curiosidade)}>Curiosidade</button>
                <div>
                 <Link to={'/'} className={style.link}>Voltar</Link>
                 </div>
            </div>
            <Aside />
            <Footer />
        </>
    );
}

export default BandDetalhes;
