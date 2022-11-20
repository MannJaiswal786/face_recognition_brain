import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '494db6eed34f49989f5765ec98ea1f79'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',

    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL,
  this.state.input)
  .then(
function(response){
  console.log(response.outputs[0].region_info.bounding_box);
},
function(err){
// there was an error
}
    );
}


 /* onButtonSubmit = () => {
   const raw = JSON.stringify({
     user_app_id : {
       user_id: "26mo438js0i7",
       app_id: "my-first-application"
     },
     inputs: [
       {
         data: {
           image: {
             url: this.state.input
           },
         },
       },
     ],
   });

   fetch(
      "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "03bb36287d8f4df497165cc4b9738e5e",
        },
        body: raw,
      }
    )
    .then((response) => response.text())
    .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
    .catch((error) => console.log("error", error));
 }
 */


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
     <FaceRecognition imageURL={this.state.imageURL} />
     <ParticlesBg type="circle" bg={true} />
    </div>
  );
}
}

export default App;
