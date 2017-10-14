import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos',function(){
    // this.route("todo",{path:"/:todo_id"});
    // this.route("delete",{path:"/:todo_id"});
    // this.route("update",{path:"/:todo_id"});
  });
});

export default Router;
