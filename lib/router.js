window.Router = new (Backbone.Router.extend({
  routes: {
    ":id/:dir": "edges"
  },

  edges: function(id, dir) {
    if(id){
      $("#content").html((new DetailView({
        model: NodesCollection.get(id),
        dir: dir
      })).render().el)
    }
  }
}));
