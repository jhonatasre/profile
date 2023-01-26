var internalTurnOff;

var sleepAnimationBug = 300;

var timerDateTime = 500;
// var timerShowNewSystem = 0;
var timerShowNewSystem = 3000;
// var timerTurnOff = 0;
var timerTurnOff = 5 * 1000;
var timerTurnOffSecond = 1000;

var initNewSystem = false;

const sleep = ms => new Promise(r => setTimeout(r, ms));
