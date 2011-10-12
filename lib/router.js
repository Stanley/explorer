window.Router = new (Backbone.Router.extend({
  routes: {
    ":id": "node"
  },
  node: function(id) {
    if(id){
      new DetailView({
        model: Nodes.get(id)
      })
    }
  }
}));
