function show() {
  var nowhrs = new Date().getHours();
  var nowmins = new Date().getMinutes();
  var hrsmins = nowhrs + (nowmins/60); // decimals of an hour


  var schedule = [
    ['Message 1',[9],[18]], // times are expressed as hours + decimals of an hour, e.g. 30 minutes is .5 hours.
    ['Message 2',[18],[21.5]],
    ['Message 3',[19.5],[20.25]]
    ['Looks Like Youre Working Late',[20.5],[5]]
  ]

  var themessage = "";
  for (var i =0; i <schedule.length; i++) {
    if ((hrsmins >= schedule[i][1]) && (hrsmins < schedule[i][2])) {
      themessage += schedule[i][0] + "<br>";
      document.getElementById("greeting").innerHTML = themessage;
    }
  }

}
