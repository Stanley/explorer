window.Nodes = new (Backbone.Collection.extend({
  model: Node,
  url: function(){ return "http://localhost:8182/graphs/demo/vertices/" },
  parse: function(response){
    return response.results
  }
}))
