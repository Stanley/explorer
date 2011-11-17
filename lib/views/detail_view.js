window.DetailView = Backbone.View.extend({
  template: _.template($("#details").html()),

  initialize: function(){
    this.model.relationships.bind('reset', this.addAll, this)
    this.model.relationships.fetch({dir: this.options.dir})
  },

  render: function(){
    this.el.className = this.options.dir
    $(this.el).html(this.template(this.model))
    return this
  },

  addAll: function() {
    var self = this
    this.model.relationships
      .each(function(relationship){
      self.addOne.call(self, relationship)
    });
  },

  addOne: function(relationship) {
    var view = new ConnectionView({
      model: relationship,
      dir: this.options.dir
    });
    $(this.el).append(view.render().el);
  },

  incomming: function(){
    return this.options.dir == "inE"
  },

  toggle: function(){
    return this.incomming() ? 'outE' : 'inE'
  },

  toggle_url: function(){
    return this.model.url() +'/'+ this.toggle()
  },

  events: {
    "click a": "show"
  },

  show: function(){
    Router.navigate(this.model.id +'/'+ this.toggle(), true)
    return false
  }
})
