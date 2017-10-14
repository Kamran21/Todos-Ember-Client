import Ember from 'ember';

export default Ember.Service.extend({
    findAll(){
        Ember.Logger.info("inside findAll in todos service");
        return this.get('store').findAll('todo');
    },
    setCompleted(todo){
        Ember.Logger.info("inside setCompleted in todos service :",todo);
        this.get('store').findRecord('todo',parseInt(todo.id)).then(model=>{
            var value=!todo.data.completed;
            if (value === undefined) {
                // property being used as a getter
                return model.get('completed');
            } else {
                // property being used as a setter
                model.set('completed', value);
                model.save();
                return value;
            }
        });
    },
    updateTodo(todo, value){
        Ember.Logger.info("inside updateTodo in todos service - before updating todo completed to:",todo);
        this.get('store').findRecord('todo',parseInt(todo.id)).then(model=>{
            // var value=todo.data.title;
            // value=this.$().find("input");
            // var value=
            model.set('title', value);
            model.save();
            Ember.Logger.info("inside updateTodo in todos service - after updating todo completed, Model=>",model.data);
            // todo.data.title=model.data.title;
            return value;
        });
    },
   removeTodo(todo){
        Ember.Logger.info("inside removeTodo in todos service :",todo);
        this.get('store').findRecord('todo',parseInt(todo.id), { backgroundReload: false })
          .then(function(todo) {
            todo.destroyRecord(); // => DELETE to /posts/2
          });
    },
    addTodo(title){
        Ember.Logger.info("inside addTodo in todos service :", title);
        this.get('store').createRecord('todo', {
            title: title,
            completed: false
          }).save();
    },
    store: Ember.inject.service()
});
