import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Nav from "./components/Nav";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="portfolio-container">
      <img className="overlay" src="./images/black.jpg" alt="texture" />
      <img className="texture" src="./images/Spiral.jpg" alt="texture" />
      <ReactFullpage
        anchors={[
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "lastPage",
        ]}
        slidesNavigation={true}
        scrollOverflow={true}
        scrollBar={true}
        licenseKey={"A7DBD34E-73DB4778-A858A699-0C1DEE01"}
        fixedElements="#myMenu"
        menu={true}
        render={() => {
          return (
            <>
              <Nav />
              <Landing />
              <About />
              <Portfolio />
              <Contact />
              <div className="section">Test3</div>
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
