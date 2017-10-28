'use strict';

$(function(){
	
	var okno = $(window);
	var menu = $('#main-nav');
	var link = $('a');
	
	if(okno.scrollTop() >= 100) {
		menu.addClass('scroll');
	}
	
	
	okno.scroll(function(){
		
		if(okno.scrollTop() >= 100) {
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');
		}
	});