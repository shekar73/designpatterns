"use strict";!function(){function a(a,b){if("string"!=typeof a)return!1;var c=a.split("?")[0];return c=c.split("."),c=c[c.length-1],c&&b.indexOf(c)?c:!1}$(".pl-toggle-code").on("click",function(){$(this).parent().next(".pl-preview+pre").toggle(250),$(this).toggleClass("active")});var b=!1;$(".nav-collapse").on("click",function(){b=!1,$("body").toggleClass("pl-collapsed-nav")});var c=function(){var a=$("body").hasClass("pl-collapsed-nav"),c=$(this).width();767>=c&&!a?(b=!0,$("body").addClass("pl-collapsed-nav")):c>767&&b&&$("body").removeClass("pl-collapsed-nav")};if($(window).on("resize",c),$(document).on("ready",c),$("body").scrollspy({target:".pl-sidebar > .nav > .active",offset:120}),$(".pl-sidebar > .nav > .active > .nav > li > a").on("click",function(){$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-110},200)}),$(":input").inputmask(),$(".select2").select2({minimumResultsForSearch:4}),$('[data-toggle="tooltip"]').tooltip({container:"body",delay:{show:200,hide:0}}),$(".datepicker").datepicker({numberOfMonths:1,showOtherMonths:!0}),$('input[type="checkbox"][indeterminate]').each(function(){this.indeterminate=!0}),$(".pl-closable-toasts .toast .close").each(function(){$(this).on("click",function(){$(this).closest(".toast").animate({right:"-100%",opacity:0},150,"swing",function(){$(this).hide(150)})})}),$(".show-toasts").each(function(){var a=$(this),b=a.attr("data-toast-target"),c=$(b);c.hide(),$(document.body).append(c);var d=c.find(".close"),e=d.length,f=0;d.each(function(){$(this).on("click",function(){e===++f&&(f=0,setTimeout(function(){c.hide()},150))})});var g=function(a){a.css({right:"-100%",opacity:0,display:"block"}),a.animate({right:"0",opacity:1},150,"swing",function(){a.next().length&&setTimeout(function(){g(a.next())},1e3)})};a.on("click",function(){c.find(".toast").hide().css({right:0,opacity:1}),c.toggle(),"block"===c.css("display")&&(c.css({position:"fixed",top:"42px",right:"0px",zIndex:"10000"}),f=0,g($(c.find(".toast")[0])))})}),$(".nav-stacked.nav-tree > li").each(function(){var a=$(this),b=$(this).find("> .nav-stacked"),c=$(this).find("> .expander");c.on("click",function(d){d.preventDefault(),d.stopPropagation();var e=b.is(":visible");c.toggleClass("expanded",!e),c.toggleClass("collapsed",e),b.toggle(150),b.find("li.active").length>0&&(b.find("li.active").removeClass("active"),a.addClass("active"))})}),$("#exampleProgressBar").each(function(){var a=$(this),b=$("#exampleProgressBarValue"),c=parseInt(this.style.width,10);setInterval(function(){a.css("width",(c+=19)%100+"%"),b.text(c%100+"%")},1e3)}),$('[data-toggle="popover"]').popover(),$("input.slider").slider({tooltip:"hide"}),window.__gaTracker){var d="xls,xlsx,doc,docx,ppt,pptx,pdf,txt,zip";d+=",rar,7z,exe,wma,mov,avi,wmv,mp3,csv,tsv",d=d.split(","),$("a").on("mousedown",function(){var b=this;if(b.href){var c=a.call(null,b.href,d);c&&window.__gaTracker("patternLibrary.send","event","Download",c,b.href)}})}}();