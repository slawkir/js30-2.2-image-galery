const searchForm = document.querySelector('form');
let searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
let query = 'spring';
let url = 'https://api.unsplash.com/search/photos?query=&client_id=l78LduGOuh9LnUEnvAY-91u3JZUdsvkD8X0d7OqHvMg';


function drawGalary() {
  getSearchInput();
  getData();
}
function getSearchInput() { 
  query = searchInput.value;
  url = 'https://api.unsplash.com/search/photos?query=' + `${query}` + '&client_id=l78LduGOuh9LnUEnvAY-91u3JZUdsvkD8X0d7OqHvMg';
  console.log(url);
}
async function getData() { 
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

searchBtn.addEventListener('click', drawGalary);





