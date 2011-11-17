window.Nodes = new (Backbone.Collection.extend({
  model: Node,
  url: function(){ return "http://localhost:8182/graphs/demo/vertices/" },
  parse: function(response){
    return response.results
  },
  get: function(id){
    // Calling super()
    return Backbone.Collection.prototype.get.call(this, /\d+:\d+$/.exec(id));
   }
}))
