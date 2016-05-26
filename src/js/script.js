
$(document).ready(function() {
  var white = '#fff';
  var black = '#3f3f3f';
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
  var trans = 'rgba(0, 0, 0, 0)';
  var green = '#008000';
  var yellow = '#ff0';
  var inactive = '1.35rem';
  var active = '2.0rem';
  var selected = '.welcome';

  var colorList = [transyellow, transblack, transteal, transpurp, transgreen, transred];
  var boxList = [lightpink, darkpink, lightpink, mediumpink, lightpink, darkpink];
  var titleList = [black, black, white, white, black, white];
  var accentList = [mediumpink, darkpink, mediumpink, mediumpink, white, lightpink];

  var rand = Math.floor(Math.random() * colorList.length);

  $('body').css('background-color', colorList[rand]);
  $('a').css('color', accentList[rand]);
  $('.nohover').animate({color: accentList[rand]}, 'slow');
  $('.name-title').css('color', titleList[rand]);
  $('.box').css('background-color', boxList[rand]);

  getNew();
  onClickFxns();

  $('#resume').animate({'font-size': active}, 1000, function() {
    setTimeout(function() {
      $('#dist-free').animate({'font-size': active}, 1500);
      $('#resume').animate({'font-size': inactive}, 1500, function() {
        pause();
        setTimeout(function() {
          $('#dist-free').animate({'font-size': inactive}, 1000);
          $('#resume').animate({'font-size': active}, 1000, function() {
            resume();
          });
        }, 2000);
      });
    }, 2000);
  });

  $('#norm').animate({'font-size': active}, 1000, function() {
    setTimeout(function() {
      $('#slow').animate({'font-size': active}, 1500);
      $('#norm').animate({'font-size': inactive}, 1500, function() {
        slow();
        setTimeout(function() {
          $('#slow').animate({'font-size': inactive}, 1000);
          $('#fast').animate({'font-size': active}, 1000, function() {
            fast();
          });
        }, 2000);

        setTimeout(function() {
          $('#fast').animate({'font-size': inactive}, 1000);
          $('#norm').animate({'font-size': active}, 1000, function() {
            norm();
          });
        }, 4000);
      });
    }, 7500);
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
    $('.nohover').animate({color: accentList[rand]}, 'slow');

    $('.name-title').css('color', titleList[rand]);
    $('.box').css('background-color', boxList[rand]);
  }

  function pause() {
    $('.box').each(function(index) {
      this.style.webkitAnimationPlayState = 'paused';
    });
  }

  function resume() {
    $('.box').each(function(index) {
      this.style.webkitAnimationPlayState = 'running';
    });
  }

  function slow() {
    $('.box').each(function(index) {
      this.style.animationDuration = '9s';
    });
  }

  function fast() {
    $('.box').each(function(index) {
      this.style.animationDuration = '2s';
    });
  }

  function norm() {
    $('.box').each(function(index) {
      this.style.animationDuration = '5s';
    });
  }

  function onClickFxns() {
    $('#clickme').click(function() {
      getNew();
    });

    $('#slow').click(function() {
      $('.box').each(function(index) {
        this.style.animationDuration = '9s';
      });
    });

    $('#fast').click(function() {
      $('.box').each(function(index) {
        this.style.animationDuration = '2s';
      });
    });

    $('.mini').click(function() {
      $('.mini').css({'font-size': inactive});
      $(this).animate({'font-size': active}, 100);
    });

    $('.mini2').click(function() {
      $('.mini2').css({'font-size': inactive});
      $(this).animate({'font-size': active}, 100);
    });

    $('#norm').click(function() {
      $('.box').each(function(index) {
        this.style.animationDuration = '5s';
      });
    });

    $('#resume').click(function() {
      $('.box').each(function(index) {
        this.style.webkitAnimationPlayState = 'running';
      });
    });

    $('#dist-free').click(function() {
      $('.box').each(function(index) {
        this.style.webkitAnimationPlayState = 'paused';
      });
    });

    $('#eat').click(function() {
      $(selected).hide();
      selected = '.eat';
      $(selected).show();
    });

    $('#eat1').click(function() {
      $(selected).hide();
      selected = '.eat';
      $(selected).show();
    });
    $('#eat2').click(function() {
      $(selected).hide();
      selected = '.eat';
      $(selected).show();
    });
    $('#eat3').click(function() {
      $(selected).hide();
      selected = '.eat';
      $(selected).show();
    });
    $('#eat4').click(function() {
      $(selected).hide();
      selected = '.eat';
      $(selected).show();
    });

    $('#write').click(function() {
      $(selected).hide();
      selected = '.write';
      $(selected).show();
    });

    $('#write1').click(function() {
      $(selected).hide();
      selected = '.write';
      $(selected).show();
    });
    $('#write2').click(function() {
      $(selected).hide();
      selected = '.write';
      $(selected).show();
    });
    $('#write3').click(function() {
      $(selected).hide();
      selected = '.write';
      $(selected).show();
    });
    $('#write4').click(function() {
      $(selected).hide();
      selected = '.write';
      $(selected).show();
    });

    $('#code').click(function() {
      $(selected).hide();
      selected = '.code';
      $(selected).show();
    });

    $('#code1').click(function() {
      $(selected).hide();
      selected = '.code';
      $(selected).show();
    });
    $('#code2').click(function() {
      $(selected).hide();
      selected = '.code';
      $(selected).show();
    });
    $('#code3').click(function() {
      $(selected).hide();
      selected = '.code';
      $(selected).show();
]    });
    $('#code4').click(function() {
      $(selected).hide();
      selected = '.code';
      $(selected).show();
]    });



  }

});
