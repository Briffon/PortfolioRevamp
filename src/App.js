import './App.css';
import Landing from './components/pages/Landing';
import Nav from './components/Nav';
import About from './components/pages/About';
import ReactPageScroller from "react-page-scroller";

function App() {
  window.addEventListener('scroll',(e)=>{
    let y= window.scrollY;
    console.log('test');
  })
  return (
    <div className="pages-container">
      <img className="overlay" src="./images/black.jpg" alt="texture"/>
      <img className="texture" src="./images/Spiral.jpg" alt="texture"/>
      <Nav/>
      <ReactPageScroller ref={c => c.reactPageScroller = c}>
          <Landing />
          <About />
      </ReactPageScroller>
    </div>
  );
}

export default App;
