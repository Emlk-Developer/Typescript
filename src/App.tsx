import React from 'react';
import './App.css';
import  Advice  from './component/Advice/Advice';
import Poster from './component/Poster/Poster';
import { useState } from "react";
import BackgroundPicture from './component/BackgroundPicture/BackgroundPicture';


function App() {

  const [selectedAdvice, setSelectedAdvice] = useState("")
  const [selectedImage, setSelectedImage] = useState("")

  return (
    <div className="App">
      <Advice setSelectedAdvice={setSelectedAdvice} />
      <BackgroundPicture setSelectedImage={setSelectedImage} />
      {selectedImage && selectedAdvice &&
      <Poster selectedAdvice={selectedAdvice} selectedImage={selectedImage}/>
      }
    </div>
  );
}

export default App;
