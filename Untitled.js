function canUseWebP() {
  var e = document.createElement("canvas");
  return 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
}
var sheet = (function(){
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();
function addCSSRule(sheet, selector, rules, index) {
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}
dummyImg = document.createElement("img"),
canUseWebP()
  ? window.innerWidth > 800
    ? (dummyImg.src = "assets/blackboard.webp", dummyImg.onload = function() {
      addCSSRule(sheet, ".hello-screen::before", "background:url('assets/blackboard.webp'); background-size:cover",0);
      document.getElementById("load").style.visibility = "hidden";
      if(yaCounter45804912){yaCounter45804912.reachGoal("1_SCREEN_VISITED")}
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {
      addCSSRule(sheet, ".hello-screen::before", "background:url('assets/blackboard.jpg'); background-size:cover",0);
      document.getElementById("load").style.visibility = "hidden";
      if(yaCounter45804912){yaCounter45804912.reachGoal("1_SCREEN_VISITED")}
    })
  : window.innerWidth > 800
    ? (dummyImg.src = "assets/blackboard.gif", dummyImg.onload = function() {
      addCSSRule(sheet, ".hello-screen::before", "background:url('assets/blackboard.gif'); background-size:cover",0);
      document.getElementById("load").style.visibility = "hidden";
      if(yaCounter45804912){yaCounter45804912.reachGoal("1_SCREEN_VISITED")}
    })
    : (dummyImg.src = "assets/blackboard.jpg", dummyImg.onload = function() {
      addCSSRule(sheet, ".hello-screen::before", "background:url('assets/blackboard.jpg'); background-size:cover",0);
      document.getElementById("load").style.visibility = "hidden";
      if(yaCounter45804912){yaCounter45804912.reachGoal("1_SCREEN_VISITED")}
    });
