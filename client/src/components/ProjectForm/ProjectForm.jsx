import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ProjectForm = ({
  onSubmit,
  onChange,
  errors,
  project,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Create Your Project</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={project.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          row={2}
          name="description"
          errorText={errors.description}
          onChange={onChange}
          value={project.description}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Amount"
          name="amount"
          onChange={onChange}
          errorText={errors.amount}
          value={project.amount}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Address"
          name="address"
          onChange={onChange}
          errorText={errors.address}
          value={project.address}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Avatar"
          name="avatar"
          onChange={onChange}
          errorText={errors.avatar}
          value={project.avatar}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create Your Project" primary />
      </div>

    </form>
  </Card>
);

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export default ProjectForm;