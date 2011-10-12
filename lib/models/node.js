window.Node = Backbone.Model.extend({
  initialize: function(attributes){
    this.id = attributes._id 
  },
  relationships: function(){
    relationships = new Relationships();
    relationships.from = this.id;
    return relationships
  }
})
