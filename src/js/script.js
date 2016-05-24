
$(document).ready(function() {
  var white = '#fff';
  var black = '#252525';
  var gray = 'rgb(128, 128, 128)';
  var lightpink = 'rgb(255, 204, 204)';
  var mediumpink = 'rgb(255, 153, 153)';
  var darkpink = 'rgb(255, 102, 102)';
  var transred = 'rgba(255, 0, 0, .5)';
  var transgreen = 'rgba(0, 255, 0, .5)';
  var transpurp = 'rgba(0, 0, 255, .5)';
  var transteal = 'rgba(0, 255, 255, .5)';
  var transblack = 'rgba(255, 255, 255, .5)';
  var transyellow = 'rgba(255, 255, 0, .5)';
  var green = '#008000';
  var yellow = '#ff0';

  var colorList = [transyellow, transblack, transteal, transpurp, transgreen, transred];
  var boxList = [lightpink, darkpink, lightpink, mediumpink, lightpink, darkpink];
  var titleList = [black, black, white, white, black, white];
  var accentList = [gray, darkpink, black, black, white, black];
  var wordOrder = ['<a class="page" id="eat" href="https://foursquare.com/eunicekokor/lists/created">eat.</a>  <a class="page" id="write" href="https://medium.com/@eunicekokor">write.</a>  <a class="page" id="code" href="https://github.com/eunicekokor">code.</a>', '<a class="page" id="eat" href="https://foursquare.com/eunicekokor/lists/created">eat.</a> <a class="page" id="code" href="https://github.com/eunicekokor">code.</a> <a class="page" id="write" href="https://medium.com/@eunicekokor">write.</a>', '<a class="page" id="write" href="https://medium.com/@eunicekokor">write.</a> <a class="page" id="eat" href="https://foursquare.com/eunicekokor/lists/created">eat.</a> <a class="page" id="code" href="https://github.com/eunicekokor">code.</a>', '<a class="page" id="write" href="https://medium.com/@eunicekokor">write.</a> <a class="page" id="code" href="https://github.com/eunicekokor">code.</a> <a class="page" id="eat" href="https://foursquare.com/eunicekokor/lists/created">eat.</a>'];
  var rand = Math.floor(Math.random() * colorList.length);
  var randOrder = Math.floor(Math.random() * wordOrder.length);
  console.log(randOrder);

  $('body').css('background-color', colorList[rand]);
  $('a').css('color', accentList[rand]);
  $('.name-title').css('color', titleList[rand]);
  $('.box').css('background-color', boxList[rand]);

  getNew();

  $('#clickme').click(function() {
    getNew();
  });

  $('#slow').click(function() {
    var x = document.getElementsByClassName('box');

    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.animationDuration = '9s';
    }
  });

  $('#fast').click(function() {
    var x = document.getElementsByClassName('box');

    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.animationDuration = '2s';
    }
  });

  $('.mini').click(function() {
    $('.mini').css({'font-size': '.5rem'});
    $(this).animate({'font-size': '1.6rem'}, 500);
  });

  $('#norm').click(function() {
    var x = document.getElementsByClassName('box');

    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.animationDuration = '5s';
    }
  });

  $('.name-title').mouseenter(function() {
    $('.name-title').html('eunice<br> codes');
  });

  $('.name-title').mouseleave(function() {
    $('.name-title').html('eunice<br> kokor');
  });

  function getNew() {
    var rand = Math.floor(Math.random() * colorList.length);
    $('body').animate(
      {backgroundColor: colorList[rand]}, 'slow'
    );
    $('a').animate({color: accentList[rand]}, 'slow');

    $('.name-title').css('color', titleList[rand]);
    $('.box').css('background-color', boxList[rand]);
  }

});
