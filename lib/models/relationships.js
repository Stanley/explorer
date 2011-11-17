window.Relationships = Backbone.Collection.extend({
  model: Relationship,
  initialize: function(models,args){ 
     this.document = args.url 
  },

  url: function(){
    return (this.document +'/'+ this.direction)
  },

  fetch: function(options){
    this.direction = options.dir
    // Calling super()
    Backbone.Collection.prototype.fetch.call(this, options);
  },

  parse: function(response){
    return response.results
  },
})
