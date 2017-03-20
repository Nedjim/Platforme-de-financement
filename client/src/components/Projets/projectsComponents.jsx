import React from 'react';
import Header from '../Header/Header.jsx';
import Project from './projet.jsx';
import axios from 'axios';

export default class Pcomponents extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dataProjects : []
      }
      this.getData();

    }
   getData(){
    axios.get('https://quiet-tundra-35186.herokuapp.com/project').then((response) => {

      let dataProjects = response.data;
      this.setState({
        dataProjects : dataProjects
      });
   console.log(dataProjects);
    });
  }

    render(){
      console.log(this.state.dataProjects);
        return(

            <div>
                <Header/>
                 <Project dataProjects={this.state.dataProjects}/>

            </div>
        )
    }
}
