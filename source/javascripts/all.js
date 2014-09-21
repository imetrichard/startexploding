// Maybe I'll bring this feature back someday
//function show() {
//  var nowhrs = new Date().getHours();
//  var nowmins = new Date().getMinutes();
//  var hrsmins = nowhrs + (nowmins/60); // decimals of an hour
//
//
//  var schedule = [
//    ['Morning',[9],[18]], // times are expressed as hours + decimals of an hour, e.g. 30 minutes is .5 hours.
//    ['Afternoon',[18],[21.5]],
//    ['Evening',[19.5],[5]]
//  ]
//
//  var themessage = "";
//  for (var i =0; i <schedule.length; i++) {
//    if ((hrsmins >= schedule[i][1]) && (hrsmins < schedule[i][2])) {
//      themessage += "<h1>" +schedule[i][0] + "</h1><br>";
//      document.getElementById("greeting").innerHTML = themessage;
//    }
//  }
//}
