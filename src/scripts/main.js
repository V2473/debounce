'use strict';

const output = document.getElementById('output');
const input1 = document.getElementById('input1');

function debounce(f, delay) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    const changeBinded = f.bind(this);

    timeout = setTimeout(() => changeBinded(...args), delay);
  };
}

function onChange(event) {
  // console.log(event.target.value);
  output.innerHTML = this.value;
  // console.log(this.value);
}

const wrapper = debounce(onChange, 1000);

input1.addEventListener('input', wrapper);
