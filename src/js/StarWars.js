import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarWarsPlanets } from "./Api";

export default class StarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      size: null,
      page: null,
      id: null
    };
  }
  
  async componentWillMount() {
    const data = await StarWarsPlanets();
    let sortPlanet = Math.floor(Math.random() * data.results.length);
    this.setState({
      data,
      isLoaded: true,
      id: sortPlanet
    });
  }
  
  async handleClick(){
    const response = await this.componentWillMount();
    if(!response){

    }
  }
  
  render() {
    const { id } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">            
            <div className="Header">                     
              <h1>STAR WARS GAME</h1>            
            </div>
          </header>            
          <div>
            {
              <div>
                {this.state.data ? (
                  this.state.data.results.map((item, index) =>
                    index === id ? (
                        <div className="Info" key={item.name.toString()}>
                          <div className="InfoTitle">{item.name.toUpperCase()}</div>
                          <div className="InfoList">
                            <p> <span>Population: </span>{item.population}</p>
                            <p> <span>Climate: </span>{item.climate}</p>
                            <p> <span>Terrain: </span>{item.terrain}</p>
                          </div>  
                          <Button className="InfoBtn" onClick={(e) => this.handleClick(e)} variant="danger">NEXT</Button>                                                                           
                        </div>
                        
                    ) :
                    ''
                  )
                ) : (
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </div>
            }      
          </div>
        </div>                
      </div>
    );
  }
}
