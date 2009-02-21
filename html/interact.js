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
    $(this).removeClass('hovered');
  });
  $('.hotzone').mouseout(function(event){
    $(this).removeClass('hovered');
  });
  $('.hotzone').mouseover(function(event){
    var targets = $(this).attr('target').split(',');
    var count = 0;
    for (i=0;i<targets.length;i++) {
      var target = $('#comment_' + targets[i]);
      count += target.size();
    };
    $(this).addClass('hovered');
    if (count) {
      event.stopPropagation();
    };
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
