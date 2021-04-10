import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    fullname : "Rekhis Amir",
    bio : "homme",
    profession : "net3allam fel react",
    imgSrc : "./profile.jpg",
    shows : false ,
    count : 0, 
  }
  
  showprofile =  ()=>{
     this.setState({shows:!this.state.shows});
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({count: this.state.count + 1})},1000);
  }
  render(){
    return (
      <div>
        <button className="btn" onClick={this.showprofile}>Click Me</button>
        <h1>{this.state.count}</h1>
        {this.state.shows ?
         <div>
         <h1>{this.state.fullname}</h1>
        <h2>{this.state.bio}</h2>
        <h3>{this.state.profession}</h3>
        <img src={this.state.imgSrc} alt="profile"/>
        </div>
      : null
        }        
      </div>
    )
    }
        }

