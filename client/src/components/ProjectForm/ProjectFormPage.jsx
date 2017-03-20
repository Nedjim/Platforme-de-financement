import React, { PropTypes } from 'react';

import ProjectForm from './ProjectForm.jsx';

class ProjectFormPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      project: {
        name: '',
        description: '',
        address: '',
        amount: '',
        avatar: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeProject = this.changeProject.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.project.name);
    const description = encodeURIComponent(this.state.project.description);
    const address = encodeURIComponent(this.state.project.address);
    const fixedAmount = encodeURIComponent(this.state.project.fixedAmount);
    const image = encodeURIComponent(this.state.project.image);
    const formData = `name=${name}&description=${description}&fixedAmount=${fixedAmount}&image=${image}&address=${address}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/project');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

      } else {
        
        // failure
        
        //console.dir(xhr);

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    
    //console.log('data', formData);
    
    xhr.send(formData);
  }

  /**
   * Change the project object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeProject(event) {
    const field = event.target.name;
    const project = this.state.project;
    project[field] = event.target.value;

    this.setState({
      project
    });
    //console.log('project', project);
  }



  /**
   * Render the component.
   */
  render() {
    return (
      <ProjectForm
        onSubmit={this.processForm}
        onChange={this.changeProject}
        errors={this.state.errors}
        project={this.state.project}
      />
    );
  }

}

ProjectFormPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ProjectFormPage;