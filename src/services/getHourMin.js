function getHourMin() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  return {
    hour: hour < 10 ? "0" + hour : hour,
    min: min < 10 ? "0" + min : min,
  };
}

export { getHourMin };
