import scss from './main.scss';
//import js from './evercookies.js'
var ip;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', '//jsonip.com', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            ip = obj.ip;
            console.log(xmlhttp.responseText);
            console.log(obj);
            console.log(ip);
         }
    }
};
xmlhttp.send(null);
var checkedItems = [];
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  document.getElementById('hello-screen').style.display = 'none';
  document.getElementById('test-screen-1').style.display = 'flex';
})
var listItems1 = document.querySelectorAll('#test-screen-1 .list-item');
for (var i = 0; i < listItems1.length; i++) {
  listItems1[i].onclick = function() {
    if (document.getElementsByClassName('list-item_selected1').length < 2 ){
      this.classList.toggle('list-item_selected1');
      checkedItems.push(parseInt(this.id));
      if (document.getElementsByClassName('list-item_selected1').length  == 2){
        setTimeout(()=>{  document.getElementById('test-screen-1').style.display = 'none';
          document.getElementById('test-screen-2').style.display = 'flex';},300)

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
        setTimeout(()=>{document.getElementById('test-screen-3').style.display = 'none';
        document.getElementById('test-results').style.display = 'flex';
        sendResult(checkedItems);},300)

      }
    }
  }
}

function sendResult(items){
  var sendObj = {'ip':ip, 'results':items};
  console.log(items);
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.open("POST", "/sendresult");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(sendObj));
}
