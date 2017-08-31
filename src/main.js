import scss from './main.scss';
import css from './javascript.fullPage.css'
import js from './javascript.fullPage.js'
//import js from './evercookies.js'
var checkedItems = [];
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress__bar');
var background = document.getElementsByClassName('background')[0];
var screenFilter = document.getElementsByClassName('screen__filter')[0];
var startButton = document.getElementById('start-button');
var endButton = document.getElementById('end-button');
var lastScrollTop = 0;
var isLarge = true;
if(window.innerWidth<=1000){isLarge = false};

window.onload = ()=>{
  window.setTimeout(()=>{document.getElementsByClassName('h1_hello')[0].style.opacity = '1';

  document.getElementById('')
},2000);
window.setTimeout(()=>{
  var results = document.getElementById('test-results');
  if (isLarge){results.style.backgroundImage = "url('assets/giphy.gif')";
  results.style.backgroundSize = "cover";}
  // results.style.display = "flex";
},7000);

// document.getElementById('fullpage').fullpage({
//   anchors: [
//       'start', 'presentation','test1','test2','test3'
//     ],
//   responsiveWidth: 1000
// });
if (isLarge){
  initialize('#fullpage', {
    anchors: [
      'start', 'presentation','test1','test2','test3'
    ]
  });
}
else {
  document.querySelector('#test2 .h2').style.display = 'none';
  document.querySelector('#test3 .h2').style.display = 'none';
}
}



function showButton(button) {
  if (location.hash === "#presentation" || !isLarge) {
    progress.style.display = 'none';
    progressBar.style.display = 'none';
    window.setTimeout(() => {
      button.classList.add('button_visible');
      button.classList.remove('button_hidden');
    }, 2000)
  }
};
function progressBarHandler(){
  if (location.hash === "#test1" && isLarge) {
    progress.style.display = 'block';
    progressBar.style.display = 'block';
    progressBar.style.width = '33.3%';
  }
  else if (location.hash === "#test2" && isLarge) {
    progress.style.display = 'block';
    progressBar.style.display = 'block';
    progressBar.style.width = '66.6%';
  }
  else if (location.hash === "#test3" && isLarge) {
    progress.style.display = 'block';
    progressBar.style.display = 'block';
    progressBar.style.width = '100%';
  }
  else if (location.hash === "#test-results") {
    progress.style.display = 'none';
    progressBar.style.display = 'none';
  }
}
  // var sections = document.querySelectorAll('.fp-section');
  // var act = document.querySelector('.activeSection');
  //
  // for (i = 0; i < sections.length; i++) {
  //   console.log(sections[i]);
  //   visibility : visible;
  //   //  sections[i].classList.remove('fp-section');
  //   sections[i].style.visibility = 'hidden';
  //   sections[i].offsetHeight; // no need to store this anywhere, the reference is enough
  //   sections[i].style.opacity = '';
  // }
  // act.style.visibility='visible';
  // act.offsetHeight; // no need to store this anywhere, the reference is enough
  // act.style.opacity='1';

var buttonStart = document.getElementById('start-button');
showButton(buttonStart);
if ("onhashchange" in window) {
  window.onhashchange = () => {
    showButton(buttonStart);
    progressBarHandler();
  }
} else {
  window.onload = ()=>{showButton(buttonStart);
  progressBarHandler();
  document.getElementsByClassName('h1_hello')[0].style.opacity = '1';
}
}

startButton.addEventListener('click', () => {
  if (isLarge){progress.style.display = 'block';
  progressBar.style.display = 'block';}
  document.getElementById('test1').style.display = 'flex';
  document.getElementById('test2').style.display = 'flex';
  document.getElementById('test3').style.display = 'flex';
  window.location.href = '#test1';
  // background.style.minHeight = documentHeight() + 'px';
  // screenFilter.style.minHeight = documentHeight() + 'px';
})
var listItems = document.querySelectorAll('.test-screen .list-item');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {
    var index = checkedItems.indexOf(parseInt(this.id));
    if (index !== -1) {
    checkedItems.splice(index, 1);
    }
    else {
      checkedItems.push(parseInt(this.id));
    }
    if(checkedItems.length>=0){
      endButton.classList.remove('button_disabled');
    }
    else {
      endButton.classList.add('button_disabled');
    }
      this.classList.toggle('list-item_selected');
  }
}
endButton.addEventListener('click',()=>{
   if(!endButton.classList.contains('button_disabled')){
     sendResult(checkedItems);
     document.getElementById('test-results').style.display = 'block';
     window.location.href = '#test-results';
     if (isLarge) {fullpage.moveSectionDown();}
     document.getElementById('test-results').style.visibility = 'visible';
    //  fullpage.destroy('all');
    //  document.getElementById('test-screen-3').classList.remove('activeSection')
    //  document.getElementById('test-results').classList.add('activeSection');
   }
   else {alert("Выбери не менее 3 вариантов")}
})

function(calculateResults){
  var title = '"К северу через северо-запад", Альфред Хичкок';
  var description = 'Приключенческо-шпионский триллер 1959 года, по стилистике предвосхищающий фильмы «бондианы»';
  var template = "Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: ";
  var yandexShare = document.getElementsByClassName('ya-share2')[0];
  document.getElementById('results-header').innerHTML = title;
  document.getElementById('results-descr').innerHTML = description
  document.getElementById('results-img').src = 'assets/003-north-by-northwest-theredlist.jpg';
  yandexShare.data.title = template + title;
  yandexShare.data.description = template + description;
}

var agreement = document.getElementById('agreement-checkbox');
var submitButton = document.getElementById('form-subscribe__submit');
if (agreement.checked){
  submitButton.disabled = false;
}
else{
  submitButton.disabled = true;
}
agreement.addEventListener('click', ()=>{
  if (agreement.checked){
    submitButton.disabled = false;
  }
  else{
    submitButton.disabled = true;
  }
})

function sendResult(items) {
  console.log(items);
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.open("POST", "/sendresult");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(items));
}


function documentHeight() {
  return Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);
}
