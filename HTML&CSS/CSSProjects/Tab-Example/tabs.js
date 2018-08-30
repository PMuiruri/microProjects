var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}

function login(){
    if(document.getElementById('user').innerHtml == null){
      if(document.getElementById('psw').innerHtml == null){
      console.log("Please Enter a Valid username or Password");
      }
    }
    else {
      alert("Thank you for logging in you may now view your profile");
  }
}
