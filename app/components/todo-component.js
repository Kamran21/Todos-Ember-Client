import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    actions:{
        // setCompleted(todo) {
        //     //call the onCheck property to invoke the passed in action
        //     Ember.Logger.info("inside toggleTodoCheck todo-component :", todo)
        //     this.get('onCheck')(todo);//(this.get('todo'));
        // }
        editTodo(){
            this.set('isEditing', true);
        },
        update(todo){
            var element=this.$().find("input");
            this.get('todosStore').updateTodo(todo, element.val() );
            element.val("");
            this.set('isEditing', false);
        },
        cancel(){
            var element=this.$().find("input");
            element.val("");
            this.set('isEditing', false);
        }
    },
    isEditing:false,
    todosStore: Ember.inject.service('todos'),
});
