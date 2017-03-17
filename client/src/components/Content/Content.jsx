import React from 'react';
import './content.scss';
<<<<<<< HEAD
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

=======
import image from '../images/imgtest.jpg';


export default class Content extends React.Component {
    render() {
        return (
            <div id='content'>
>>>>>>> a1d966e17f541e83658dc18393cd476cffc1f566

            <div className="TopProjet">
                <h1>
                    Projet du Jour
                </h1>
            </div>

            <div className="content-1">
            <div className="limagedutop"> <img src={image}/></div>

            <div className="imgtopprojet"></div>
            <ul>
                <li>
                    Nom du Projet:
                </li>
                <li>
                    Description:
                </li>
                <li> Lieux: </li>
                <li> Budget Necessaire: </li>
            </ul>

            <div className="buttontop">
                <progress value="25" max="100"></progress>
                <button>Votez</button>
                <button>Faire un don</button>

            </div>
        </div>
      </div>


        )
    }
}
