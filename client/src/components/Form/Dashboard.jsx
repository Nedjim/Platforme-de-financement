import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import image from '../images/blank-profile-picture-973460_960_720.png';
import './Dashboard.scss';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Tableau de bord"
      subtitle="Vous avez maintenant accès a vôtre page de profil."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

  <div className="imgprofil">
<img className="imgclass" src={image}/>
<ul>
<li>Nom:</li>
<li>Age:</li>
<li>Ville:</li>
<li>Membre depuis:</li>
</ul>
  </div>

<div className='Boutoncree'>
<button> Crée vôtre projet ! </button>

</div>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
