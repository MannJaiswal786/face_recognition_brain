import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
  return (
    <div className="App">
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm/>
     {/*<FaceRecognition/>*/}
     <ParticlesBg type="circle" bg={true} />
    </div>
  );
}
}

export default App;
