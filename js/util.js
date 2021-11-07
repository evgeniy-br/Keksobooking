const ALERT_SHOW_TIME = 10000;

const getRandomInteger = function(min, max) {
  if (min < 0 || min >= max) {
    throw new Error('Некорректный диапозон чисел');
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomFractionalNumber = function(min, max, numberOfSigns) {
  if (min < 0 || min >= max) {
    throw new Error('Некорректный диапозон чисел');
  }
  const randomNumber = min + Math.random() * (max - min);

  return +randomNumber.toFixed(numberOfSigns);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, getRandomFractionalNumber, showAlert};
