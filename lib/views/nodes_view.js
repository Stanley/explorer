window.NodesView = Backbone.View.extend({
  el: '#nodes-list',

  initialize: function(){
    Nodes.bind('reset', this.addAll, this)
    Nodes.fetch({success: function(){
      Backbone.history.start({pushState: false, root: '/index.html/'});
    }})
  },

  render: function(){},

  addAll: function() {
    var self = this
    Nodes.each(function(node){
      self.addOne.call(self, node)
    });
  },

  addOne: function(node) {
    var view = new NodeView({model: node});
    $(this.el).append(view.render().el);
  }
})
