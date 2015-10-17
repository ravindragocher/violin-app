import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/' });
this.route('candidateregistration', { path: '/candidateregistration' });
this.route('adminuser', {path: '/adminuser'});
this.route('managementuser', {path:'/managementuser'});
this.route('tokengenerate',{path:'/tokengenerate'});
this.route('importfile' ,{path : '/importfile'});
this.route('testpage', {path: '/testpage'});
this.route('starttest', {path: '/starttest'});
this.route('terminate', {path: '/terminate'});
this.route('testlaunch', { path: '/testlaunch' });
this.route('result', { path: '/result' });
this.route('contentadmin' , {path: '/contentadmin'});
});

export default Router;
