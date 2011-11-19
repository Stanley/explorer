window.NodesView = Backbone.View.extend({
  el: '#nodes-list',

  initialize: function(){
    NodesCollection = new Nodes([],{graphUrl:this.options.graphUrl})
    NodesCollection.bind('reset', this.addAll, this)
    NodesCollection.fetch({success: function(){ // TODO move to HomeView
      Backbone.history.start({pushState: false, root: '/index.html/'});
    }})
  },

  render: function(){},

  addAll: function() {
    var self = this
    NodesCollection.each(function(node){
      self.addOne.call(self, node)
    });
  },

  addOne: function(node) {
    var view = new NodeView({model: node});
    $(this.el).append(view.render().el);
  }
})
