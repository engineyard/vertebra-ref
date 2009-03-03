/*
 * Copyright 2009, Engine Yard, Inc.
 *
 * Licensed under the GNU Lesser General Public License 3.0
 */

swapDelay = 300;

function showHeader() {
  $('#header').slideDown(swapDelay);
  $('#toc').slideUp(swapDelay);
};

function showToc() {
  var toc = $('#toclist');
  var live = $('.commentbox').filter('.tocentry').children('.tochead')
  toc.empty();
  for (var i = 0; i < live.length; i++) {
    var t = $(live[i]).text()
    console.log(t);
    toc.append('<li>' + t + '</li>');
  };
  $('#toc').slideDown(swapDelay);
  $('#header').slideUp(swapDelay);
};

$(function(){
  // Display All Functionality
  $('.title').click(function(event){
    $('.commentbox').slideDown(swapDelay);
    $('.commentbox').addClass('tocentry');
    showToc($('.commentbox'));
    event.stopPropagation();
  });

  // Hover Highlighting of Text
  $('.hotzone').mouseover(function(event){
    for (i = 0; i < 10; i++) {
      $(this).removeClass('hovered' + i);
      $('.thover'+i).removeClass('thover'+i);
    };
  });
  $('.hotzone').mouseout(function(event){
    for (i = 0; i < 10; i++) {
      $(this).removeClass('hovered' + i);
      $('.thover'+i).removeClass('thover'+i);
    };
  });
  $('.hotzone').mouseover(function(event){
    var parent = $(this);
    var i = 0;
    var targets;

    do {
      if (parent.hasClass('hotzone')) {
        parent.addClass('hovered' + i);
        targets = parent.attr('target').split(',');
        for (j = 0; j<targets.length; j++) {
          var target = $('#comment_' + targets[j]);
          target.addClass('thover' + i);
        };
        i++;
      }
      parent = parent.parent()
    } while (parent.size());

    event.stopPropagation();
  });

  // Fall-through Reset Functionality
  $('body').click(function(){
    showHeader();
    $('.commentbox').fadeOut(swapDelay);
  });

  // Comment Dynamic Pop-Up Functionality
  $('.hotzone').click(function(event){
    var stale = $('.commentbox').filter('.tocentry')
    var live = $('')
    var targets = $(this).attr('target').split(',');
    var count = 0;
    var toc = $('#toc');
    for (i=0;i<targets.length;i++) {
      var target = $('#comment_' + targets[i]);
      stale = stale.not(target);
      live = live.add(target)
      count += target.size();
    };
    stale.removeClass('tocentry')
    live.addClass('tocentry')
    stale.slideUp(swapDelay); 
    live.slideDown(swapDelay);
    showToc();
    if (count) {
      event.stopPropagation();
    };
  });

  // Initial Setup
  $('#header').fadeIn(8 * swapDelay);
});
