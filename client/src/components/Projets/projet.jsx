import React from 'react';
import _ from 'lodash';


export default class Project extends React.Component {
    render(){
      console.log(this.props.dataProjects);
      let prop = this.props.dataProjects;


          if (!this.props.dataProjects) return <h1> </h1>
        return (
            <div>
                { this.props.dataProjects.map( (bike, i) =>
                    <div key={i}>{bike.name}</div>
                )}
            </div>

        );
    }
}
