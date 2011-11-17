window.Node = Backbone.Model.extend({
  initialize: function(attributes){
    this.id = /\d+:\d+$/.exec(attributes._id)
    this.relationships = new Relationships([], {url: this.url()})
  }
})
