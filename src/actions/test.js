const test = document.getElementById('test');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
test.innerHTML =  'MANGA ' + urlParams.get('id')