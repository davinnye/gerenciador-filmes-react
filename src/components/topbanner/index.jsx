import "./style.css";
import Astarion from "./imgs/Astarion.png"
export function Topbanner(){
    return(
        <div className="topbanner">
            <img src={Astarion} alt="Astarion" className="topbanner"/>
            <center className="topbanner">GERENCIADOR DE FILMES</center>
        </div>
    )
}