const fetchAvatar = function() {
  const search = $('#search').val();
  const url = `https://api.multiavatar.com/${search}.png`
  $('#result').attr('src', url)
  // $.ajax(url).done(function(link) {
  //   console.log(link.text())
  //   // $('#result').attr('src', link)
  // })
}

$('#fetch').on('click', fetchAvatar)
