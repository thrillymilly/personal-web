$(document).ready(function() {
    console.log( "hello and thank you for visiting my site!" );

    $(".audiences-egg").mouseover(function(){
        $('.audience-overlay').show()
    });
    $(".audiences-egg").mouseout(function(){
        $('.audience-overlay').hide()
    });

    $(".clients-egg").mouseover(function(){
      $('.clients-overlay').show()
    });
    $(".clients-egg").mouseout(function(){
        $('.clients-overlay').hide()
    });

    $( '.project-menu-btn' ).click(function(){
      $('.project-responsive-menu').slideToggle()
      $('.community-responsive-menu').slideUp();
      $('.website-responsive-menu').slideUp();
    });
    $( '.community-menu-btn' ).click(function(){
      $('.community-responsive-menu').slideToggle()
      $('.website-responsive-menu').slideUp();
      $('.project-responsive-menu').slideUp();
    });
    $( '.website-menu-btn' ).click(function(){
      $('.website-responsive-menu').slideToggle()
      $('.community-responsive-menu').slideUp();
      $('.project-responsive-menu').slideUp();
    });

    $('.content').html($('<object>').attr({data:"pages/default.html", type:"text/html"}))

    $('.default').click(function(){
      $('.content').html($('<object>').attr({data:"pages/default.html", type:"text/html"}))
    });

    $('.rap-mic-yo').click(function(){
      $('.content').html($('<object>').attr({data:"pages/rap-mic-yo.html", type:"text/html"}))
    });

    $('.guru-guides').click(function(){
      $('.content').html($('<object>').attr({data:"pages/guru-guides.html", type:"text/html"}))
    });

    $('.vid-spy').click(function(){
      $('.content').html($('<object>').attr({data:"pages/vid-spy.html", type:"text/html"}))
    });

    $('.post-gallery').click(function(){
      $('.content').html($('<object>').attr({data:"pages/post-gallery.html", type:"text/html"}))
    });

    $('.otis').click(function(){
      $('.content').html($('<object>').attr({data:"pages/otis.html", type:"text/html"}))
    });

    $('.wmrand').click(function(){
      console.log('hello jorge');
      var wmlist = ['William_Miller_(Australian_athlete)', 'Billy_Miller_(archivist)', 'William_Miller_(golfer)', 'Willie_Miller_(basketball)', 'Dr._Bill_Miller', 'William_Miller_(actor,_born_1978)', 'William_Miller_(poet)',]

      var wmrand = wmlist[Math.floor(Math.random()*wmlist.length)];

      $('.wmrand').attr("href", "https://en.wikipedia.org/wiki/" + wmrand)
    })
});
