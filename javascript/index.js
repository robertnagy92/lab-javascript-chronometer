const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();

}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.splitClick();
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.splitClick();
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.splitClick();
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];

}

function printSplit() {
  // ... your code goes here
  const li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  let li = document.querySelectorAll("li");
  li.innerHTML = chronometer.resetClick();
  for (let i = 0; i <= li.length - 1; i++) {
    splits.removeChild(li[i]);
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick(printTime);
}

function setResetBtn() {
  // ... your code goes here
  clearSplits();
  secUni.innerHTML = chronometer.resetClick();
  secDec.innerHTML = chronometer.resetClick();
  minDec.innerHTML = chronometer.resetClick();
  minUni.innerHTML = chronometer.resetClick();
  milDec.innerHTML = chronometer.resetClick();
  milUni.innerHTML = chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  btnLeft.onclick = () => {
    if (btnLeft.innerHTML === "START") {
      setStartBtn();
    } else {
      setStopBtn();
    }
  };
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  btnRight.onclick = () => {
    if (btnRight.innerHTML === "SPLIT") {
      setSplitBtn();
    } else {
      setResetBtn();
    }
  };
});
