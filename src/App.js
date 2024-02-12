import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Img from "./components/imgblock/img";
import Section1 from "./components/section1/section";
import Section2 from "./components/section2/section";
import Section3 from "./components/section3/section";
import Section4 from "./components/section4/section";
import Footer from "./components/section5/footer/footer";
import Section5 from "./components/section5/section";

function App() {
  return (
    <div className="App">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Img />
        <Section4 />
        <Section5 />
        <Footer />
    </div>
  );
}

export default App;
