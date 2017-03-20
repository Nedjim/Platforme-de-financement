import React from 'react';
import './content.scss';

import axios from 'axios';
import image from '../images/projjjet.jpg';

//import axios from 'axios';


export default class Content extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       dataProjects : []
//     }
//     this.getData();
//
//   }
//  getData(){
//   axios.get('http://localhost:3000/project').then((response) => {
//
//     const dataProjects = response.data;
//     this.setState({
//       dataProjects : dataProjects
//     });
//     console.log(dataProjects[0].name);
//   });
// }
    render(){
    //  console.log(dataProjects[0].name);
//console.log(this.state.dataProjects[0]);
        return(
            <div  id='content'>
            <div className="TopProjet">
                <h1>
                    Projet du Jour
                </h1>
            </div>

            <div className="content-1">
            <div className="limagedutop"> <img src={image}/>
            <h3> La Caravane des monstres </h3>
              <div className="buttontop">
                  <progress value="70" max="100"></progress>
                  <button>Votez</button>
                  <button>Faire un don</button>

              </div>

            </div>

            <div className="imgtopprojet">
            <ul>

                <li>
                    La Caravane des monstres est mon premier roman, né de ma fascination pour les freakshows et pour le merveilleux. Je fais appel à vous pour financer un premier tirage. Si vous aimez l'univers du cirque, l'ambiance des mystérieuses foires au monstres, les femmes à barbe, les voyantes de fête foraine et les natures atypiques, cette caravane n'attend plus que vous...
                </li>
                <li> Lieux: Metz </li>
                <li> Budget Necessaire: 3 000€ </li>
            </ul>
          </div>



          </div>
        </div>



        )
    }
}
