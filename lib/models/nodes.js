window.Nodes = Backbone.Collection.extend({
  model: Node,
  url: function(){ 
    return this.options.graphUrl+"/vertices/" 
  },
  initialize: function(models, options){
    this.options = options
  },
  parse: function(response){
    return response.results
  },
  get: function(id){
    // Calling super()
    return Backbone.Collection.prototype.get.call(this, /\d+:\d+$/.exec(id));
   }
})
