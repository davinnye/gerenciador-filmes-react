import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import "./global.css";


function App() {
  return (
    <div className="App">
        <>
        <Topbar/>
        <Topbanner/>
        <Mainbody/>
        <Footer/>
        </>
    </div>
  );
}

export default App;
