import Style from './Main.module.css';
import Frameworks from "../Frameworks/Frameworks";
import Intro from "../Intro/Intro";
import Noticias from "../Noticias/Noticias";
import Recursos from "../Recursos/Recursos";
import Tipos from "../Tipos/Tipos";

function Main(){
  return(
    <>
    <Intro />
    <Tipos />
    <Noticias />
    <Frameworks />
    <Recursos />
    </>

  );
}

export default Main;