window.Relationship = Backbone.Model.extend({
  initialize: function(attributes){
    this.id = attributes._id 
  },
  timetables: function(){
    var group_by_line = {};
    var arrivals = this.get('departures')
    $.each(arrivals, function(dep,run){
      if(!group_by_line[run['line']]) group_by_line[run['line']] = {}
      group_by_line[run['line']][dep] = run['duration']
    })
    return group_by_line
  }
})
