import React, { Component } from 'react';
import Carousel from './Carousel.scss';



const slides = [

  {

    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3piG_JkqRk5OfI7ZuDDqjT7UXBMlTLNNGbZNOOnyZCW_aO1Dx',

    name: '1st'

  },

  {

    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREFFinafD2YcYC6yDfUyAgOY6adZ6obzA0oiwA_r9Q8KqXN2PBqg',

    name: '2nd'

  },

  {

    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREFFinafD2YcYC6yDfUyAgOY6adZ6obzA0oiwA_r9Q8KqXN2PBqg',

    name: '3rd'

  },

  {

    url: 'https://img.hebus.com/hebus_2011/01/01/preview/110101205021_11.jpg',

    name: '4th'

  }

];



class Carousel extends Component {

constructor(props) {
  super(props)

  // ceci est un state

  this.state = {

    position: 0

  }

}

  nextSlide () {

    if(this.state.position>=3){

      this.setState({position: 0})

    }

    else{

      this.setState({position: ++this.state.position})

    }

  }



  prevSlide () {

    if(this.state.position!==0){

      this.setState({position: --this.state.position})

    }

  }



  render() {

    // la position du state qui change * la width qu'on a définit

    // permettent de créer notre carousel

    let newMargin = this.state.position * -400;

    return (
<div className="App">
        <div className="container">

          <ul style={{marginLeft: newMargin}}>

            { slides.map(slide =>

              <li>

                <img className="Carousel" src={slide.url} />

                <p className="Slider"> {slide.name}</p>

              </li>

            )};

          </ul>

          {/*this. car nos fonctions sont en dehors du render*/}

          <button onClick={() => this.prevSlide()}>Prev</button>

          <button onClick={() => this.nextSlide()}>Next</button>

        </div>
      </div>

    );

  }

}



export default Carousel;
