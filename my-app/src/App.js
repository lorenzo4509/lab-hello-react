import "./App.css";
import example from "./images/ironhack-logo-xs.png";
import Button from "./components/buttom";
import example1 from "./images/menu-top-xs.png";
import example2 from "./images/icon1.png";
import examole3 from "./images/icon2.png";
import examole4 from "./images/icon3.png";
import examole5 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="p1">
        <img src={example} alt="logo" />
        <img src={example1} alt="menu" />
      </div>

      <section>
        <h1>Say hello to ReactJS</h1>
        <p className="l1"> 
          you will learn how to use the most popular frontend ibrary, and become
          a super ninja developer.
        </p>
        <Button text="awesome" className="l5"/>
      </section>
      <section className="p2">
        <img src={example2} alt="icon1" />
        <div>
          <h3 class="p3">Declarative</h3>
          <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div>
          <img src={examole3} alt="icon2" />
          <h3>Components</h3>
          <p class="p4">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <img src={examole4} alt="icon3" />
        <div>
          <h3>Single-way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <img src={examole5} alt="icon4" />
        <div>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run in modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
