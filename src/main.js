import { Giphy } from './giphy';

$(document).ready(function(){
  $('#search').click(function(){
    let term = $('searchterm').val();
    $('#searchterm').val("");
    $.ajax({
      url: `api.giphy.com/v1/gifs/search?api_key=${}&q=pizza`
    })
  });
});
