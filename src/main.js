import scss from './main.scss';
// import css from './javascript.fullPage.css'
// import js from './javascript.fullPage.js'
//import js from './evercookies.js'
var checkedItems = [];
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress__bar');
var background = document.getElementsByClassName('background')[0];
var screenFilter = document.getElementsByClassName('screen__filter')[0];
var startButton = document.getElementById('start-button');
var endButton = document.getElementById('end-button');
var lastScrollTop = 0;

window.onload = ()=>{
  window.setTimeout(()=>{document.getElementsByClassName('h1_hello')[0].style.opacity = '1';
  var results = document.getElementById('test-results');
  results.style.backgroundImage = "url('assets/giphy.gif')";
  results.style.backgroundSize = "cover";
  results.style.display = "flex";
  document.getElementById('')
},2000);
window.setTimeout(()=>{fullpage.moveSectionDown();
},7000);

// document.getElementById('fullpage').fullpage({
//   anchors: [
//       'start', 'presentation','test1','test2','test3'
//     ],
//   responsiveWidth: 1000
// });
initialize('#fullpage', {
  responsiveWidth: 1000,
  anchors: [
    'start', 'presentation','test1','test2','test3'
  ]
});
}



function showButton(button) {
  if (location.hash === "#presentation") {
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
  progressBarHandler();
  document.getElementsByClassName('h1_hello')[0].style.opacity = '1';
}
}

startButton.addEventListener('click', () => {
  progress.style.display = 'block';
  progressBar.style.display = 'block';
  window.location.href = '#test1';
  fullpage.moveSectionDown();
  // document.getElementById('presentation-screen').classList.remove('activeSection')
  // document.getElementById('test-screen-1').classList.add('activeSection');
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
     document.getElementById('test-results').style.visibility = 'visible';
    //  fullpage.destroy('all');
    //  document.getElementById('test-screen-3').classList.remove('activeSection')
    //  document.getElementById('test-results').classList.add('activeSection');
   }
   else {alert("Выбери не менее 3 вариантов")}
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
