startTime = moment;

timerTime = startTime.add(1, 'seconds');

currentTime = moment;

if (isActive) {
  deltaTime = timerTime.diff(currentTime);

  timerTime = timerTime.add(deltaTime, 'seconds');
}
