import Base from './components/Form/Base.jsx';
import HomePage from './components/Form/HomePage.jsx';
import DashboardPage from './components/Form/DashboardPage.jsx';
import LoginPage from './components/Form/LoginPage.jsx';
import SignUpPage from './components/Form/SignUpPage.jsx';
import ProjectFormPage from './components/ProjectForm/ProjectFormPage.jsx';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, HomePage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },

    {
      path: '/project',
      component: ProjectFormPage
    },

  ]
};

export default routes;
