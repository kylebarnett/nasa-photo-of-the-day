import React from "react";
import "./App.css";
import NasaPhotos from './components/NasaPhotos';

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <NasaPhotos />
    </div>
  );
}

export default App;
