class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerElement = document.querySelector(this.selector);

    if (!this.timerElement) {
      console.error(`елемент з селектором "${this.selector}" не знайдений.`);
      return;
    }

    this.refs = {
      days: this.timerElement.querySelector('[data-value="days"]'),
      hours: this.timerElement.querySelector('[data-value="hours"]'),
      mins: this.timerElement.querySelector('[data-value="mins"]'),
      secs: this.timerElement.querySelector('[data-value="secs"]'),
    };

    this.start();
  }

  start() {
    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    const time = this.targetDate - now;

    if (time <= 0) {
      clearInterval(this.intervalId);
      this.updateUI(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.updateUI(days, hours, mins, secs);
  }

  updateUI(days, hours, mins, secs) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = this.pad(hours);
    this.refs.mins.textContent = this.pad(mins);
    this.refs.secs.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
