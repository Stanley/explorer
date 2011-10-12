window.DetailView = Backbone.View.extend({
  el: '#content',
  template: _.template($("#details").html()),

  initialize: function(){

    this.relationships = this.model.relationships()
    this.relationships.bind('reset', this.addAll, this)
    this.relationships.fetch()

    this.render()
  },

  render: function(){
    $(this.el).html(this.template(this.model))
    return this
  },

  addAll: function() {
    var self = this
    this.relationships.each(function(relationship){
      self.addOne.call(self, relationship)
    });
  },

  addOne: function(relationship) {
    var view = new ConnectionView({model: relationship});
    $(this.el).append(view.render().el);
  }
})
