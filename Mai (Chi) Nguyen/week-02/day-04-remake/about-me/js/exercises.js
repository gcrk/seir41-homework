// let pageNode = document.body;
//
// pageNode.style.fontFamily = "Arial, sans-serif";
//
// let span1 = document.getElementById('nickname');
// span1.innerHTML = "Little Chi Mai";
//
// let span2 = document.getElementById('favorites');
// span2.innerHTML = "Dogs";
//
// let span3 = document.getElementById('hometown');
// span3.innerHTML = "Hanoi";
//
// let list = document.getElementsByTagName('li');
// // console.log(list);
//
//
// for (let i = 0; i < list.length; i++) {
//   list[i].className = "listitem";
// }
//
// // console.log(list[0]);
// const bill = document.createElement('img'); // attached DOM node
// bill.src = 'http://www.fillmurray.com/120/300';
//
// document.body.appendChild(bill); //attach the node to the DOM

$('body').css({'font-family': 'Arial, sans-serif'});

$('#nickname').html('<strong>Mai<\strong>');
$('#favorites').append('Dogs');
$('#hometown').append('Hanoi');

$('body').append('<img src="http://www.fillmurray.com/120/300"></img>');

//append: push element, add element
//text: just text, replace
//html: add html codes, replace
