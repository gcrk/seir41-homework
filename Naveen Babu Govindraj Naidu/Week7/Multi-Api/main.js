
const fetchNews = function(){
 $.ajax('https://api.nasa.gov/planetary/apod?api_key=M8az1qbIXHbtLXRXgJMdcLsDb2xH90pmy6tGbt4G').done(function(info){
   console.log(info)
   let nasa = `<h1>Meteor</h1>
   <img  class="image" src="${info.url}">
   <p>${info.explanation}</p>`;
   $('#site1').html(nasa);
 });
};
fetchNews();


const fetchImages = function(){
 $.ajax('https://picsum.photos/v2/list').done(function(info){
  console.log(info)
    let image = "";
  for (let i = 0; i < info.length; i++){
       image += `<img class="image" src="${info[i].download_url}">`;
  }
     $('#site2').html(image);
 });
};
fetchImages();

const fetchArt = function(){
 $.ajax('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49').done(function(info){
  console.log(info)
  let movie = `<h3>${info.title}</h3>
  <h4>Director</h4>
  <p>${info.director}</p>
  <p>${info.description}</p>`;
  $('#movie').html(movie);

 });
};
fetchArt();
