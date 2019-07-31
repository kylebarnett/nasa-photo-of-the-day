import React from "react";
import "./App.css";
import NasaPhotos from './components/NasaPhotos';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h1>Nasa Photo of the Day!</h1>
      </div>
      <NasaPhotos />
    </div>
  );
}

export default App;
