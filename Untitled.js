function canUseWebP() {
  var e = document.createElement("canvas");
  return 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
}
dummyImg = document.createElement("img"),
canUseWebP()
  ? window.innerWidth > 800
    ? (dummyImg.src = "assets/blackboard.webp", dummyImg.onload = function() {
      document.head.appendChild(document.createElement("style").appendChild(document.createTextNode('.hello-screen::before{background:url("assets/blackboard.webp"); background-size:cover}'))),
      document.getElementById("load").style.visibility = "hidden",
      yaCounter45804912.reachGoal("1_SCREEN_VISITED")
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {
      document.head.appendChild(document.createElement("style").appendChild(document.createTextNode('.hello-screen::before{background:url("assets/blackboard.jpg"); background-size:cover}'))),
      document.getElementById("load").style.visibility = "hidden",
      yaCounter45804912.reachGoal("1_SCREEN_VISITED")
    })
  : window.innerWidth > 800
    ? (dummyImg.src = "assets/blackboard.gif", dummyImg.onload = function() {
      document.head.appendChild(document.createElement("style").appendChild(document.createTextNode('.hello-screen::before{background:url("assets/blackboard.gif"); background-size:cover}'))),
      document.getElementById("load").style.visibility = "hidden",
      yaCounter45804912.reachGoal("1_SCREEN_VISITED")
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {
      document.head.appendChild(document.createElement("style").appendChild(document.createTextNode('.hello-screen::before{background:url("assets/blackboard.jpg"); background-size:cover}'))),
      document.getElementById("load").style.visibility = "hidden",
      yaCounter45804912.reachGoal("1_SCREEN_VISITED")
    });
