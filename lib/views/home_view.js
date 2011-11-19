var defaultGraph = 'http://graph.bagate.la/demo';

window.HomeView = Backbone.View.extend({
  el: '.welcome',

  initialize: function(){
    $('#graphUrl').val(defaultGraph)
    this.nodesView = new NodesView({graphUrl:defaultGraph});
  },

  events: {
    "keypress #graphUrl": "enableButton",
    "click #updateButton": "disableButton"
  },

  enableButton: function(){
    $("#updateButton").attr("disabled", false)
  },

  disableButton: function(){
    this.nodesView = new NodesView({graphUrl:$('#graphUrl').val()});
    $("#updateButton").attr("disabled", true)
  },

  detailView: function(id, dir){
    this.nodesView.detailView(id,dir)
  }
})
