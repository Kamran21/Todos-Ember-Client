import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'ul',
    actions: {
        toggleTodoCheck:function(todo){
            Ember.Logger.info("inside toggleTodoCheck todo-list :", todo,todo.id,todo.data.completed);
            this.sendAction('toggleTodoCheck', todo);
       } 
    }
    // ,
    // todos:Ember.inject.service()
});

// export default Ember.Component.extend({
//     'tagName':'div',
//     actions: {
//     //     toggleTodoCheck:function(todo){
//     //     Ember.Logger.info("inside toggleTodoCheck todo-list :", todo,todo.id,todo.data.completed);
//     //     this.sendAction('toggleTodoCheck', todo);
//     //    } 
//     },
//     sum: function(){
//         return this.get('todos').sum();
//     }.property(),
//     remaining: function() {
//         return this.get('todos').remaining();
//     }.property(),
//     inflection: function() {
//         var all = this.get('sum');
//         var remaining = this.get('remaining');
//         return all - remaining;
//     }.property('sum','remaining'),
//     todos:Ember.inject.service()
// });
