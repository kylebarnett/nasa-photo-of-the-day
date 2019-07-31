import React from "react";
import "./App.css";
import NasaPhotos from './components/NasaPhotos';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <nav className="nav-container">
          <button className="buttons" href="https://nasa.gov">Home</button>
          <button className="buttons " href="https://github.com/kylebarnett">About Me </button>
        </nav>
        <div className="title">
          <h1>Nasa Photo of the Day!</h1>
        </div>
      </div>
      <NasaPhotos />
    </div>
  );
}

export default App;
