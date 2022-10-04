/**
 * Events
 * //reference: https://javascript.info/onload-ondomcontentloaded
*/


const button = document.getElementById('btn');
button.addEventListener('click', () => {
  alert('button clicked');
});

function DOMContentLoaded() {
  alert('DOM is ready');
}

function onLoad() {
  alert('documnet loaded');
}

function beforeUnload() {
  alert('before loaded');
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);
window.addEventListener('load', onLoad);

addEventListener('beforeunload', (event) => {
  return 'There are unsaved changes. Leave now?';
});
