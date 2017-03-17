import React from 'react';
import './content.scss';
import axios from 'axios';

export default class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataProjects : []
    }
    this.getData();

  }
 getData(){
  axios.get('http://localhost:3000/project').then((response) => {

    const dataProjects = response.data;
    this.setState({
      dataProjects : dataProjects
    });
    console.log(dataProjects[0].name);
  });
}
    render(){
    //  console.log(dataProjects[0].name);
console.log(this.state.dataProjects[0]);
        return(
            <div  id='content'>
              {/* <h1>Nom: {dataProjects[0].name}</h1>
 */}


            <div className="TopProjet">
            <h1> Projet du Jour </h1>
            </div>

<div className="content-1">
            <div className="imgtopprojet"></div>
            <ul>
              <li> NomProjet </li>
              <li> Description </li>
            </ul>
<div className="buttontop">
<progress value="25" max="100"></progress>
<button>Votez</button>
<button>Faire un don </button>
</div>


</div>
</div>
        )
    }
}
