window.Relationships = Backbone.Collection.extend({
  model: Relationship,
  url: function(){ 
     return "http://localhost:8182/graphs/2011-09-13/vertices/"+ this.from +"/outE"
   },
  parse: function(response){
    return response.results
  },
})
