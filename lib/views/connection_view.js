window.ConnectionView = Backbone.View.extend({
  className: "connection",
  template: _.template($("#connection").html()),

  initialize: function(){
    this.timetables = this.model.timetables()
    this.addAll()
  },

  render: function(){
    $(this.el).prepend(this.template(this.model))
    return this
  },

  addAll: function() {
    var self = this
    $.each(this.timetables, function(key,val){
      var departures = Object.keys(val)
      self.addOne.call(self, new Timetable({
        line: key,
        departures: departures,
        durations: departures.map(function(dep){ return val[dep] })
      }))
    });
  },

  addOne: function(timetable) {
    var view = new TimetableView({
      model: timetable
    });
    $(this.el).append(view.render().el);
  },

  inV: function(){
    return Nodes.get(this.model.get('_inV'))
  },

  outV: function(){
    return Nodes.get(this.model.get('_outV'))
  },

  events: {
            "click a": "show"
          },

  show: function(){
    var dir = this.options.dir == "inE" ? "_outV" : "inV"
    Router.navigate(this.model.get(dir) +'/'+ this.options.dir, true)
    return false
  }
})
