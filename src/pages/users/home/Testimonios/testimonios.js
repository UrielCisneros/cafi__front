import React, { Component } from "react";
import './testimonios.scss'

import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { Card } from 'antd';

const { Meta } = Card;

export default class Testimonios extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: 
        <Card
            className="d-flex"
            cover={<img  width="600px" height="350px" className="flecha"
            src="https://picsum.photos/800/802/?random" alt="a"/>} >
            <Meta className="datos-testimonio mt-5"
             title="Testimonio Numero 1" description="Este es un testimonio de tu tienda CAFI" />
        </Card>
    },
    {
      key: uuidv4(),
      content: 
        <Card
            className="d-flex"
            cover={<img  width="600px" height="350px" className="flecha"
            src="https://picsum.photos/800/802/?random" alt="a"/>} >
            <Meta className="datos-testimonio mt-5" 
            title="Testimonio Numero 2" description="Este es un testimonio de tu tienda CAFI" />
        </Card>
    },
    {
      key: uuidv4(),
      content: 
      <Card
            className="d-flex"
            cover={<img  width="600px" height="350px" className="flecha"
            src="https://picsum.photos/800/802/?random" alt="a"/>} >
            <Meta className="datos-testimonio mt-5" 
            title="Testimonio Numero 3" description="Este es un testimonio de tu tienda CAFI" />
        </Card>
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

 
  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "78%", height: "500px"}}>
        
        <Carousel
            className="flotar"
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
        />
        
        
      </div>
    );
  }
}
