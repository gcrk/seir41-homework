// https://jsbin.com/sujucesoya/edit?js,output

// https://jsbin.com/yufekexeqo/edit?js,output

// const libButton = document.getElementById('lib-button');
//
// const libIt = function () {
//   const noun = document.getElementById('noun').value;
//   const adj = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//   let story = `${name} really likes ${adj} ${noun}.`;
//   document.getElementById('story').innerHTML = story;
// }
//
// libButton.addEventListener('click', libIt);
//

$('#lib-button').on("click", function () {
  const $noun = $('#noun').val();
  const $adj = $('#adjective').val();
  const $name = $('#name').val();
  $('#story').html(`${$name} really likes ${$adj} ${$noun}.`);
})
