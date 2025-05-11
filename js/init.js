let timerInstance = null;
document.getElementById('start-timer').addEventListener('click', () => {
  const input = document.getElementById('date-input').value;
  if (!input) {
    alert('Будь ласка, введіть дату й час у полі вище.');
    return;
  }
  const targetDate = new Date(input);
  if (isNaN(targetDate)) {
    alert('Невірний формат дати. Спробуйте ще раз.');
    return;
  }
  if (timerInstance && typeof timerInstance.intervalId !== 'undefined') {
    clearInterval(timerInstance.intervalId);
  }
  timerInstance = new CountdownTimer({
    selector: '#timer-1',
    targetDate,
  });
});

