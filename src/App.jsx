import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";


function App() {
  return (
    <div className="App">
        <>
        <Topbar/>
        <Topbanner/>
        <Mainbody>
        <Menu/>
        </Mainbody>
        <Footer/>
        </>
    </div>
  );
}

export default App;
