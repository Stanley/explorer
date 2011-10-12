window.Nodes = new (Backbone.Collection.extend({
  model: Node,
  url: function(){ return "http://localhost:8182/graphs/2011-09-13/vertices/" },
  parse: function(response){
    return response.results
  }
}))
