import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";
import { Home } from "./pages/home";


function App() {
  return (
    <div className="App">
        <>
        <Topbar/>
        <Topbanner/>
        <Mainbody>
        <Menu/>
        <Home/>
        </Mainbody>
        <Footer/>
        </>
    </div>
  );
}

export default App;
