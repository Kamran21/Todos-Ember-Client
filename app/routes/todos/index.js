import Ember from 'ember';

export default Ember.Route.extend({
    // actions:{
    //     addTodo(){
    //         this.set('isSaving', true);
    //     },
    //     save(todo){
    //         var text=this.$().find("input-save").val();
    //         this.get('todos').addTodo(text);
    //     }
    // },

    model(){
        const store=this.get('todos');
        return store.findAll();
    },

    todos:Ember.inject.service()

    // sum: function(){
    //     return this.model.content.length;
    // }.property(),

    // remaining: function() {
    //     return this.model.filterBy('completed', false).get('length');
    // }.property(),

    // inflection: function() {
    //     var all = this.get('sum');
    //     var remaining = this.get('remaining');
    //     return all - remaining;
    // }.property('sum','remaining')
});
