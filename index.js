
class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.timerElement = document.querySelector(selector);
      this.targetDate = targetDate;
  
      this.refs = {
        days: this.timerElement.querySelector('[data-value="days"]'),
        hours: this.timerElement.querySelector('[data-value="hours"]'),
        mins: this.timerElement.querySelector('[data-value="mins"]'),
        secs: this.timerElement.querySelector('[data-value="secs"]'),
      };
  
      this.start();
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;
  
        if (time <= 0) {
          clearInterval(this.intervalId);
          this.updateClock(0);
          return;
        }
  
        this.updateClock(time);
      }, 1000);
    }
  
    
  }


  