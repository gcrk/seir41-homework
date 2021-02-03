

const fetchFact = function() {

   const url = "https://api.nasa.gov/planetary/apod?api_key=tbEPBL7GJQ4dQvexlJKq5jbDNTMsHD1grGmg4aDb"


   $.ajax(url).done(function(result){
   console.log(result)

   const date = result.date
   const p1 = document.createElement('p');
   p1.innerHTML = `Date: ${date}`
   document.body.appendChild(p1);

   const img = $('<img />', {
   id: 'photo',
   src: `${result.hdurl}`,
   alt: 'Img',
   }).height(300).width(300);
   img.appendTo($('body'));

   const description = result.explanation
   const p2 = document.createElement('p');
   p2.innerHTML = `description: ${description}`
   document.body.appendChild(p2);


   });
};

   $(document).ready(function(){
   $('#fetch').on('click', fetchFact);
   });
