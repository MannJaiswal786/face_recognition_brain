import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '494db6eed34f49989f5765ec98ea1f79'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log('click');
  app.models.predict("494db6eed34f49989f5765ec98ea1f79", "https://samples.clarifai.com/face-det.jpg").then(
function(response){
  console.log("Hello");
},
function(err){
// there was an error
}
    );
}

  render() {
  return (
    <div className="App">
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm 
     onInputChange = {this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />
     {/*<FaceRecognition/>*/}
     <ParticlesBg type="circle" bg={true} />
    </div>
  );
}
}

export default App;
