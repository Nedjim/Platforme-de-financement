import React from 'react';
import axios from 'axios';
import Tot from './tot.jsx';

export default class Test extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dataProjects : []
      }
      this.getData();

    }
   getData(){
    axios.get('http://localhost:3000/project').then((response) => {

      let dataProjects = response.data;
      this.setState({
        dataProjects : dataProjects
      });
  // console.log(dataProjects);
    });
  }

    render(){
    //  console.log(this.state.dataProjects);
        return(
            <div>
                 <Tot dataProjects={this.state.dataProjects}/>

            </div>
        )
    }
}
