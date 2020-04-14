chrome.runtime.onInstalled.addListener(function() {

  var settings= {
    notificationperiod: 20,
    enablesound: true,
    enablecount: true,
    enablemessage: true,
    appon: true,
  };

  chrome.browserAction.setPopup({popup:'sourcecode/popupnewuser.html'});

  function setUp(){
    if (typeof(localStorage.notificationperiod) === 'undefined'){
      localStorage.setItem('notificationperiod', settings.notificationperiod)
    };
    if (typeof(localStorage.enablesound) === 'undefined'){
      localStorage.setItem('enablesound', settings.enablesound)
    };
    if (typeof(localStorage.enablecount) === 'undefined'){
      localStorage.setItem('enablecount', settings.enablecount)
    };
    if (typeof(localStorage.enablemessage) === 'undefined'){
      localStorage.setItem('enablemessage', settings.enablemessage)
    };
    if (typeof(localStorage.appon) === 'undefined'){
      localStorage.setItem('appon', settings.appon)
    };
  };

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
  }];

  secondnotification = {
    title: "Time's up",
    message: "Your eyes thank you!",
    iconUrl: 'assets/logo/logo_128.png',
    type: 'basic'
  };


  setUp();

  chrome.alarms.create('recurrentnotificationalarm', {delayInMinutes: parseFloat(settings.notificationperiod), periodInMinutes: parseFloat(settings.notificationperiod)});

  chrome.alarms.onAlarm.addListener(async function(alarm){
    if (alarm.name === 'recurrentnotificationalarm'){
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

    };
  });

});
