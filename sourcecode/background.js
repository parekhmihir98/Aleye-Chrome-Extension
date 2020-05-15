chrome.runtime.onStartup.addListener(function(){
  console.log('The startup listener has fired!');
  chrome.alarms.clearAll();
  if (localStorage.getItem('appon') == 'true'){
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
});

let notificationperiodmenu = document.getElementById('notification-period');

notificationitems = [{
title: 'Stretch your body',
message: 'Drop your head and slowly roll your neck in a circular motion.',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Focus breath',
message: 'Close your eyes, take a deep breath in, hold, and slowly exhale.',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Create space',
message: 'Imagine a big, empty sky in your mind',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Focus intent',
message: 'Set a goal for the next hour',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Wrist exercise',
message: 'Clench your fists and slowly rotate your wrists.',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Practise gratitude',
message: 'What are you grateful for today?',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Boost the self',
message: 'What are you proud of lately?',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Label emotions',
message: 'What word fits in your current feeling?',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Stretch your body',
message: 'Stand up nice and tall, squeezing your shoulder blades together.',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Let go',
message: 'Let go of a repetitive thought',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Invite warmth',
message: 'Smile a little bit',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Rest your feet',
message: 'Clench and release your feet',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Practise joy',
message: "What's one thing you are excited for?",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Close your eyes',
message: "Gently close your eyes and cover them with your palms",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Focus shifting',
message: "Close one eye with your hand, take a pen and slowly move it closer/further at eye level",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Roll your eyes',
message: "Without moving your head, slowly roll your eyes in a circular motion",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Distance gazing',
message: "Spend a moment gazing at a distant object",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Have a short walk',
message: "Take a moment to stand up and walk into a different room and back",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
},
{
title: 'Bodyweight exercises',
message: "Use this break to plank, squat or do some press-ups",
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
}

];

notificationitemstandard = {
title: "Prevent eye strain",
message: 'Take a moment to look away from the screen for 20 seconds',
iconUrl: 'assets/logo/logo_128.png',
type: 'basic'
};

secondnotification = {
  title: "Time's up",
  message: "Your eyes thank you!",
  iconUrl: 'assets/logo/logo_128.png',
  type: 'basic'
};


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.message === 'notificationperiodchange'){
    chrome.alarms.clearAll();
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
  else if (request.message === 'enablemessagechange') {
    chrome.alarms.clearAll();
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
  else if (request.message === 'enablesoundchange') {
    chrome.alarms.clearAll();
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
  else if (request.message === 'enablecountchange') {
    chrome.alarms.clearAll();
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
  else if (request.message === 'apponchange') {
    chrome.alarms.clearAll();
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
  else if (request.message === 'appoffchange') {
    chrome.alarms.clearAll();
  }
});

chrome.alarms.onAlarm.addListener(async function(alarm){
  if (alarm.name === 'recurrentnotificationalarm2'){
    if (localStorage.getItem('enablemessage') == 'true' && localStorage.getItem('enablesound') == 'true' && localStorage.getItem('enablecount') == 'true') {
      chrome.notifications.create('', notificationitems[Math.floor(Math.random() * notificationitems.length)]);
      var myAudio = new Audio(chrome.runtime.getURL("ding.ogg"));
      myAudio.volume = 0.1;
      myAudio.play();
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(20000);
      chrome.notifications.create('', secondnotification);
      myAudio.play();
    }
    else if (localStorage.getItem('enablemessage') == 'true' && localStorage.getItem('enablesound') == 'true' && localStorage.getItem('enablecount') == 'false') {
      chrome.notifications.create('', notificationitems[Math.floor(Math.random() * notificationitems.length)]);
      var myAudio = new Audio(chrome.runtime.getURL("ding.ogg"));
      myAudio.volume = 0.1;
      myAudio.play();
    }
    else if (localStorage.getItem('enablemessage') == 'true' && localStorage.getItem('enablesound') == 'false' && localStorage.getItem('enablecount') == 'true') {
      chrome.notifications.create('', notificationitems[Math.floor(Math.random() * notificationitems.length)]);
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(20000);
      chrome.notifications.create('', secondnotification);
    }
    else if (localStorage.getItem('enablemessage') == 'false' && localStorage.getItem('enablesound') == 'true' && localStorage.getItem('enablecount') == 'true') {
      chrome.notifications.create('', notificationitemstandard);
      var myAudio = new Audio(chrome.runtime.getURL("ding.ogg"));
      myAudio.volume = 0.1;
      myAudio.play();
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(20000);
      chrome.notifications.create('', secondnotification);
      myAudio.play();
    }
    else if (localStorage.getItem('enablemessage') == 'false' && localStorage.getItem('enablesound') == 'true' && localStorage.getItem('enablecount') == 'false') {
      chrome.notifications.create('', notificationitemstandard);
      var myAudio = new Audio(chrome.runtime.getURL("ding.ogg"));
      myAudio.volume = 0.1;
      myAudio.play();
    }
    else if (localStorage.getItem('enablemessage') == 'false' && localStorage.getItem('enablesound') == 'false' && localStorage.getItem('enablecount') == 'false') {
      chrome.notifications.create('', notificationitemstandard);
    }
    else if (localStorage.getItem('enablemessage') == 'false' && localStorage.getItem('enablesound') == 'false' && localStorage.getItem('enablecount') == 'true') {
      chrome.notifications.create('', notificationitemstandard);
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(20000);
      chrome.notifications.create('', secondnotification);
    }
    else if (localStorage.getItem('enablemessage') == 'true' && localStorage.getItem('enablesound') == 'false' && localStorage.getItem('enablecount') == 'false') {
      chrome.notifications.create('', notificationitems[Math.floor(Math.random() * notificationitems.length)]);
    }
  };
});


chrome.idle.setDetectionInterval(300);

chrome.idle.onStateChanged.addListener(function(state){
  if (state === 'idle' || state === 'locked') {
    chrome.alarms.clearAll();
  }

  else if (state === 'active' && localStorage.getItem('appon') == 'true') {
    chrome.alarms.clearAll();
    console.log('Restarting notifications after lock/idle state');
    chrome.alarms.create('recurrentnotificationalarm2', {delayInMinutes: parseFloat(localStorage.getItem('notificationperiod')), periodInMinutes: parseFloat(localStorage.getItem('notificationperiod'))});
  }
});
