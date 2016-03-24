
$(function() {
	$all = $(".grid > div");
	var zindex = 2;
	$all.click(function() {
		
		$(this)
		.css("z-index", zindex)
		.toggleClass("active");
		
		zindex++;
		
	});
});
$(document).ready(function() {
	$('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
		
		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).fadeIn(1750).siblings().hide();
		
		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		
		e.preventDefault();
	});
});
$(document).ready(function() {
	$(".fancybox").fancybox();	
});
$(function(){
	$(document).on( 'scroll', function(){
		
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
			} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});
$(function(){
	$(document).on( 'scroll', function(){
		
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
			} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}$(function() {
	$('a[href*=#]:not([href=#]).navbar').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
var $container = jQuery('#graph');
var barcolors      = [ '#008B8B', '#66CCCC', '#61B329', '#BCED91', '#9932CC', '#7D26CD'],
highlightcolor = '#FFF68F',
lengendlabels  = ['UI Development Experience','Angular JS','JS/jQuery','HTML/CSS Experience',],
data           = [5, 2, 4, 6,];
var pheight = parseInt($container.css('height')),
pwidth  = parseInt($container.css('width')),
radius  = pwidth < pheight ? pwidth/3 : pheight/3;
bgcolor = jQuery('.donut').css('background-color');
var paper = new Raphael($container[0], pwidth, pheight);
// draw the piechart
var pie = paper.piechart(pwidth/2, pheight/2, radius, data, {
	legend: lengendlabels,
	legendpos: 'east',
	legendcolor: '#eaeaea',
	stroke: bgcolor,
	strokewidth: .8,
	colors: barcolors
});
// assign the hover in/out functions
pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	this.sector.animate({ 'stroke': highlightcolor }, 400);
	this.sector.animate({ 'stroke-width': 1 }, 500, "bounce");
	
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].attr({ r: 8.5 });
	    this.label[1].attr({ "font-weight": 800 });
	    center_label.attr('text', this.value.value + ' Years');
	    center_label.animate({ 'opacity': 1.0 }, 200);
	}
	}, function () {
	this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");
	this.sector.animate({ 'stroke': bgcolor }, 400);
	if (this.label) {
		this.label[0].animate({ r: 5 }, 500, "bounce");
		this.label[1].attr({ "font-weight": 400 });
		//center_label.attr('text','');
		center_label.animate({ 'opacity': 0.0 }, 500);
	}
});
// blank circle in center to create donut hole effect
paper.circle(pwidth/2, pheight/2, radius*0.6)
.attr({'fill': bgcolor, 'stroke': bgcolor});
var center_label = paper.text(pwidth/2, pheight/2, '')
.attr({'fill': '#eaeaea', 'font-size': '18', "font-weight": 800, 'opacity': 0.0 });