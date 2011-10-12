window.TimetableView = Backbone.View.extend({
  tagName: "span",
  className: "timetable",
  template: _.template($("#timetable").html()),

  render: function(){
    $(this.el).html(this.template(this.model))
    return this
  }
})
