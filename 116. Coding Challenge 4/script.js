'use strict';

const txtArea = document.getElementById('text-input');
const btnSubmit = document.getElementById('submit-text');

btnSubmit.addEventListener('click', function () {
  const trimSplit = txtArea.value.split('\n');
  for (const [i, text] of trimSplit.entries()) {
    const [frist, second] = text.toLowerCase().trim().split('_');
    const res = frist + second[0].toUpperCase() + second.slice(1);
    console.log(res.padEnd(25) + '✅'.repeat(i + 1));
  }
});
