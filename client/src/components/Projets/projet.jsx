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
                    <div className="project" key={i}><img src={bike.urlImage}/><p>Nom: {bike.name}</p><p>{bike.description}</p><p>{bike.fixedAmount}</p><p>{bike.receivedAmount}</p></div>
                )}
                {/* { this.props.dataProjects.map( (bike, i) =>
                    <div className="name" key={i}>{bike.description}</div>
                )} */}
            </div>

        );
    }
}
