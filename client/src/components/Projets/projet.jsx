import React from 'react';
import _ from 'lodash';
import './projet.scss';



export default class Project extends React.Component {
    render(){
      console.log(this.props.dataProjects);
      let prop = this.props.dataProjects;


          if (!this.props.dataProjects) return <h1> </h1>
        return (
            <div className="projects">
                { this.props.dataProjects.map( (bike, i) =>
                    <div className="project" key={i}><img src={bike.urlImage}/>
                     <p className="description">{bike.description}</p>
                      <p className="name">{bike.name}</p>
                      <p className="budget">Budget: <span>{bike.fixedAmount}</span> €</p>
                      <p className="financed">Financé: <span>{bike.receivedAmount}</span> € </p>
                      <p className="date">{bike.date}</p>
                  </div>
                )}
                {/* { this.props.dataProjects.map( (bike, i) =>
                    <div className="name" key={i}>{bike.description}</div>
                )} */}
            </div>

        );
    }
}
