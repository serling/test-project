import fetch from 'node-fetch';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fetcher = (...args) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = fetch(...args).then((response) => response.json());
      resolve(response);
    }, randomIntFromInterval(500, 2000));
  });
};

export { fetcher };
