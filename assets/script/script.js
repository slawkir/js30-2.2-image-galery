const searchForm = document.querySelector('form');
let searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
let query = 'spring';
let url = 'https://api.unsplash.com/search/photos?query=&client_id=l78LduGOuh9LnUEnvAY-91u3JZUdsvkD8X0d7OqHvMg';
const galery = document.querySelectorAll('.galery-item');


function drawGalary() {
  getSearchInput();
  getData();
  // drawImg();
}
function getSearchInput() { 
  if (searchInput.value.length !== 0) {
    query = searchInput.value;
  }
  
  url = 'https://api.unsplash.com/search/photos?query=' + `${query}` + '&per_page=30&orientation=landscape&client_id=l78LduGOuh9LnUEnvAY-91u3JZUdsvkD8X0d7OqHvMg';
  console.log(url);
}
async function getData() { 
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  
  drawImg(data);
}

function drawImg(data) { 
  for (let i = 0; i < galery.length; i++) {
    galery[i].style.backgroundImage = `url('${data.results[i].urls.regular}')`;
  }
}


window.addEventListener('load', drawGalary);
searchBtn.addEventListener('click', drawGalary);





