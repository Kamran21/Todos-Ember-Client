import DS from 'ember-data';

export default DS.Model.extend({
    title:DS.attr("string"),
    completed:DS.attr("boolean"),
    elementId: function() {
      return "checkboxFourInput-" + this.get('id');
    }.property('id')
});
