window.Timetable = Backbone.Model.extend({
  chart_url: function(){
    var departures = this.get('departures').map(function(x){ return Math.round(x/14.40) }).join() 
  var dur =  this.get('durations').map(function(x){ return x || 0 })
  var scale = Math.max.apply(null, dur) < 10

    var durations = dur.map(function(x){ return Math.round(scale ? x*100/12 : x*10/9) }).join()
    return "https://chart.googleapis.com/chart"+
           "?cht=s"+
           "&chs=250x100"+
           "&chxr=0,0,1440"+
           "&chxt=x,y"+
           "&chxl=0:|0:00|12:00|24:00|1:||"+ (scale ? "0.2h" : "1.5h") +
           "&chm=o,ff0000,0,,2"+
           "&chd=t:"+ departures +
            "|"+ durations
  },
})
