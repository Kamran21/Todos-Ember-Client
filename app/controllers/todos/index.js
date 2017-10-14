import Ember from 'ember';

export default Ember.Controller.extend({
    // actions: {
    //     toggleTodoCheck:function(todo){
    //     alert("toggleTodoCheck " + todo.title);
    //    } 
    // },
    actions:{
        addTodo(){
            this.set('isSaving', true);
        },
        save(){
            var text=this.get('title');
            this.get('todos').addTodo(text);
            this.set('title','');
            this.set('isSaving', false);
        },
        cancel(){
            this.set('title','');
            this.set('isSaving', false)
        }
    },
    todos: Ember.inject.service(),
    
    isSaving:false,
    title:"",

    sum: function(){
        return this.model.content.length;
    }.property(),

    remaining: function() {
        return this.model.filterBy('completed', false).get('length');
    }.property(),

    inflection: function() {
        var all = this.get('sum');
        var remaining = this.get('remaining');
        return all - remaining;
    }.property('sum','remaining')

});
