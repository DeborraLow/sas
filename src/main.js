import scss from './main.scss';
//import js from './evercookies.js'
var checkedItems = [];
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress__bar');
var background = document.getElementsByClassName('background')[0];
var screenFilter = document.getElementsByClassName('screen__filter')[0];
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  document.getElementById('hello-screen').style.display = 'none';
  document.getElementById('test-screen-1').style.display = 'flex';
  //background.classList.add('background_hidden');
  progress.style.display = 'block';
  background.style.minHeight = documentHeight() + 'px';
  screenFilter.style.minHeight = documentHeight() + 'px';
})
var listItems1 = document.querySelectorAll('#test-screen-1 .list-item');
for (var i = 0; i < listItems1.length; i++) {
  listItems1[i].onclick = function() {
    if (document.getElementsByClassName('list-item_selected1').length < 2 ){
      this.classList.toggle('list-item_selected1');
      checkedItems.push(parseInt(this.id));
      if (document.getElementsByClassName('list-item_selected1').length  == 2){
        setTimeout(()=>{
          document.getElementById('test-screen-1').style.display = 'none';
          document.getElementById('test-screen-2').style.display = 'flex';
          background.style.minHeight = documentHeight() + 'px';
          screenFilter.style.minHeight = documentHeight() + 'px';
          progressBar.style.width = '33.3%';
        },300)

      }
    }
  }
}
var listItems2 = document.querySelectorAll('#test-screen-2 .list-item');
for (var i = 0; i < listItems2.length; i++) {
  listItems2[i].onclick = function() {
    if (document.getElementsByClassName('list-item_selected2').length < 2 ){
      this.classList.toggle('list-item_selected2');
      checkedItems.push(parseInt(this.id));
      if (document.getElementsByClassName('list-item_selected2').length  == 2){
        setTimeout(()=>{document.getElementById('test-screen-2').style.display = 'none';
        document.getElementById('test-screen-3').style.display = 'flex';},300)
        background.style.minHeight = documentHeight() + 'px';
        screenFilter.style.minHeight = documentHeight() + 'px';
        progressBar.style.width = '66.6%';
      }
    }
  }
}

var listItems3 = document.querySelectorAll('#test-screen-3 .list-item');
for (var i = 0; i < listItems3.length; i++) {
  listItems3[i].onclick = function() {
    if (document.getElementsByClassName('list-item_selected3').length < 2 ){
      this.classList.toggle('list-item_selected3');
      checkedItems.push(parseInt(this.id));
      if (document.getElementsByClassName('list-item_selected3').length  == 2){
        progressBar.style.width = '100%';
        setTimeout(()=>{progress.style.display = 'none'},1500);
        setTimeout(()=>{document.getElementById('test-screen-3').style.display = 'none';
        document.getElementById('test-results').style.display = 'block';
        background.style.minHeight = document.documentElement.clientHeight + 'px';
        screenFilter.style.minHeight = document.documentElement.clientHeight + 'px';
        background.style.minHeight = documentHeight() + 'px';
        screenFilter.style.minHeight = documentHeight() + 'px';
        sendResult(checkedItems);},300)
      }
    }
  }
}

function sendResult(items){
  console.log(items);
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.open("POST", "/sendresult");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(items));
}

function documentHeight() {
    return Math.max(
      document.documentElement.clientHeight,
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
}
