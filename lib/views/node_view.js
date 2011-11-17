window.NodeView = Backbone.View.extend({
  tagName: "li",
  template: _.template($("#node").html()),
  render: function(){
    $(this.el).html(this.template(this.model))
    return this
  },

  events:{
    "click a": "show"
  },

  show: function(e){
    Router.navigate(this.model.id.toString() +'/outE', true)
    return false
  }
})
