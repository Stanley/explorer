window.Node = Backbone.Model.extend({
  initialize: function(attributes){
    this.id = attributes._id 
    this.relationships = new Relationships([], {url: this.url()})
  }
})
