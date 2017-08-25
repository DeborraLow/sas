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

initialize('#fullpage', {
  anchors: [
    'firstPage', 'secondPage'
  ],
  menu: '#menu',
  css3: false
});
function showButton(button) {
  if (location.hash === "#secondPage") {
    progress.style.display = 'none';
    progressBar.style.display = 'none';
    window.setTimeout(() => {
      button.classList.add('button_visible');
      button.classList.remove('button_hidden');
    }, 2000)
  }
};
function progressBarHandler(){
  if (location.hash === "#test1") {
    progress.style.display = 'block';
    progressBar.style.display = 'block';
    progressBar.style.width = '33.3%';
  }
  else if (location.hash === "#test2") {
    progress.style.display = 'block';
    progressBar.style.display = 'block';
    progressBar.style.width = '66.6%';
  }
  else if (location.hash === "#test3") {
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
  progressBarHandler();}
}

startButton.addEventListener('click', () => {
  progress.style.display = 'block';
  progressBar.style.display = 'block';
  window.location.href = '#test1';
  fullpage.moveSectionDown();
  document.getElementById('presentation-screen').classList.remove('activeSection')
  document.getElementById('test-screen-1').classList.add('activeSection');
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
    if(checkedItems.length>=3){
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
     window.location.href = '#test-results'
     fullpage.moveSectionDown();
     document.getElementById('test-screen-3').classList.remove('activeSection')
     document.getElementById('test-results').classList.add('activeSection');
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
