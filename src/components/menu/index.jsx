import { Link } from "react-router-dom";
import "./style.css"


export function Menu (){
    return(
            <div className="menu">
                <nav className="menu">
                    <Link to="/">HOME</Link>            
                </nav>
                <nav className="menu">
                    <Link to="/">FILMES</Link>
                </nav>
                <nav className="menu">
                    <Link to="/">DIRETORES</Link>
                </nav>
                <nav className="menu">
                    <Link to="/">ATORES</Link>
                </nav>
            </div>

    );
}