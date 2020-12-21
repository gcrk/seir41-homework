// $(function () {
// const makeMadLib = () => {

//     // //Clean way
//     // let res = `${$('#person').val()} really ${$('#adjective').val()} ${$('#noun').val()}`;
//     // $('#story').html(`${res}`);

//     //Messy but less code way
//     $('#story').html(`${$('#person').val()} really ${$('#adjective').val()} ${$('#noun').val()}`)
// }
// });


//ES6 + jQuery = <3
$(function () {
    //Make the libs
    const makeMadLib = () => $('#story').html(`${$('#person').val()} really ${$('#adjective').val()} ${$('#noun').val()}`);
    //Click the libs
    $('#lib-button').click(makeMadLib);
});