class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1
      if(callback) callback()
    },1000)
  }
  getMinutes() {
    // ... your code goes here
   return Math.floor(this.currentTime % 60);
  }
  getSeconds() {
    // ... your code goes here
   return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentTime % 60;
    }
  twoDigitsNumber() {
    // ... your code goes here
    if (this.currentTime < 10) {
      return `0${this.currentTime}`;
    } else {
    return this.currentTime;
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
