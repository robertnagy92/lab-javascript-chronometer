class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime = this.currentTime + 1
    },1000)
  }
  getMinutes() {
    // ... your code goes here
    if (this.currentTime !== 0) {
      return Math.floor(this.currentTime / 60)
    } else {
      return 0
    }
  }
  getSeconds() {
    // ... your code goes here
    if(this.currentTime !== 0) {
      return Math.floor(this.currentTime % 60);
    } else {
      return 0
    }
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
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
