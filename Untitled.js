function canUseWebP() {
  var e = document.createElement("canvas");
  return 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
}
document.onload = function(){
  dummyImg = document.createElement("img");
canUseWebP()
  ? window.outerWidth > 800
    ? (dummyImg.src = "assets/blackboard.webp", dummyImg.onload = function() {
      document.styleSheets[0].insertRule('.hello-screen::before{background:url("assets/blackboard.webp"); background-size:cover}', document.styleSheets[0].cssRules.length),
      document.getElementById("load").style.visibility = "hidden"
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {

      document.styleSheets[0].insertRule('.hello-screen::before{background:url("assets/blackboard.jpg"); background-size:cover}', document.styleSheets[0].cssRules.length),
      document.getElementById("load").style.visibility = "hidden"

    })
  : window.outerWidth > 800
    ? (dummyImg.src = "assets/blackboard.gif", dummyImg.onload = function() {
      document.styleSheets[0].insertRule('.hello-screen::before{background:url("assets/blackboard.gif"); background-size:cover}', document.styleSheets[0].cssRules.length),
      document.getElementById("load").style.visibility = "hidden"
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {
      document.styleSheets[0].insertRule('.hello-screen::before{background:url("assets/blackboard.jpg"); background-size:cover}', document.styleSheets[0].cssRules.length),
      document.getElementById("load").style.visibility = "hidden"
    });

}
