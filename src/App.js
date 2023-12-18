import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ImageComponent
          id="image1"
          src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
          alt="React Logo"
          width="200px"
          margin="50px"
        />
        <ButtonComponent content="This is a button test" color="red" />
        <ImageComponent
          id="image2"
          src="https://i.redd.it/t0prkpqff6211.jpg"
          alt="Random anime react lol"
          width="300px"
          margin="25px"
        />
        <ButtonComponent content="This is ANOTHER button test" color="blue" />
      </header>
    </div>
  );
}

export default App;
