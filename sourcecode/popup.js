document.addEventListener('DOMContentLoaded', (event) => {
  let notificationperiodmenu = document.getElementById('notification-period');
  let apponinput = document.querySelector('input[id=app-on]');
  let enablesoundbutton = document.getElementById('enable-sound');
  let enablecountbutton = document.getElementById('enable-count');
  let enablemessagebutton = document.getElementById('enable-message');
  let bottomtext1 = document.getElementById('bottomtext1');

  notificationperiodmenu.value = localStorage.getItem('notificationperiod');

  if (localStorage.getItem('enablemessage') == 'true' && localStorage.getItem('appon') == 'true'){
    enablemessagebutton.checked = true;
  }
  else {
    enablemessagebutton.checked = false;
  };

  if (localStorage.getItem('enablesound') == 'true' && localStorage.getItem('appon') == 'true'){
    enablesoundbutton.checked = true;
  }
  else {
    enablesoundbutton.checked = false;
  };

  if (localStorage.getItem('enablecount') == 'true' && localStorage.getItem('appon') == 'true'){
    enablecountbutton.checked = true;
  }
  else {
    enablecountbutton.checked = false;
  };

  if (localStorage.getItem('appon') == 'false'){
    apponinput.checked = false;
    enablemessagebutton.checked = false;
    enablecountbutton.checked = false;
    enablesoundbutton.checked = false;
    bottomtext1.textContent='OFF';
    bottomtext1.style.color = '#8f8f8f';
  };

  notificationperiodmenu.addEventListener('change', function(){
    localStorage.setItem('notificationperiod', notificationperiodmenu.value);
    chrome.runtime.sendMessage({message: 'notificationperiodchange'});
  });

  enablemessagebutton.addEventListener('change', function(){
    if (enablemessagebutton.checked){
      localStorage.setItem('enablemessage', true);
      chrome.runtime.sendMessage({message: 'enablemessagechange'});
    }
    else {
      localStorage.setItem('enablemessage', false);
      chrome.runtime.sendMessage({message: 'enablemessagechange'});
    }
  });

  enablesoundbutton.addEventListener('change', function(){
    if (enablesoundbutton.checked){
      localStorage.setItem('enablesound', true);
      chrome.runtime.sendMessage({message: 'enablesoundchange'});
    }
    else {
      localStorage.setItem('enablesound', false);
      chrome.runtime.sendMessage({message: 'enablesoundchange'});
    }
  });

  enablecountbutton.addEventListener('change', function(){
    if (enablecountbutton.checked){
      localStorage.setItem('enablecount', true);
      chrome.runtime.sendMessage({message: 'enablecountchange'});
    }
    else {
      localStorage.setItem('enablecount', false);
      chrome.runtime.sendMessage({message: 'enablecountchange'});
    }
  });

  apponinput.addEventListener('change', function(){
    if (apponinput.checked){
      localStorage.setItem('appon', true);
      chrome.runtime.sendMessage({message: 'apponchange'});
      bottomtext1.textContent='ON';
      bottomtext1.style.color = '#388075';
      if (localStorage.getItem('enablesound') == 'true'){
        enablesoundbutton.checked = true;
      };
      if (localStorage.getItem('enablecount') == 'true'){
        enablecountbutton.checked = true;
      };
      if (localStorage.getItem('enablemessage') == 'true'){
        enablemessagebutton.checked = true;
      };
    }
    else {
      localStorage.setItem('appon', false);
      chrome.runtime.sendMessage({message: 'appoffchange'});
      bottomtext1.textContent='OFF';
      bottomtext1.style.color = '#8f8f8f';
      enablesoundbutton.checked = false;
      enablecountbutton.checked = false;
      enablemessagebutton.checked = false;
    }
  });
});
