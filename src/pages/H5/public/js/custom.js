$(function(){var a=$(".vertical-nav"),b=false;$(".preloader").delay(200).fadeOut(700,function(){$(this).remove()});$(".vertical-nav .toggle-menu").on("click",function(){a.toggleClass("menu-active")});$(".home .home-intro p span").typed({strings:["Designer.","Developer."],cursorChar:"",typeSpeed:70,loop:true,backSpeed:20});$(".vertical-nav .mini-menu > ul li a").on("click",function(d){d.preventDefault();var f=$(this);f.addClass("active").parent().siblings("li").find("a").removeClass("active");$(f.attr("href")).addClass("active").siblings("section").removeClass("active")});function c(){$(".chart").easyPieChart({size:140,barColor:"#2a2a2b",trackColor:"#121213",scaleColor:false,lineWidth:2,scaleLength:4,lineCap:"circle",animate:{duration:2000,enabled:true}})}if(!b&&$("#about").scrollTop()>=$(".skills").offset().top+250){c();b=true}$("#about").on("scroll",function(){if(!b&&$("#about").scrollTop()>=$(".skills").offset().top+250){c();b=true}});if($(".portfolio-content .item")[0]){$(".portfolio-content .item").magnificPopup({delegate:".icon-img",type:"image",gallery:{enabled:true}})}$(".contact-form").on("submit",function(){var e=$(this),d={};e.find("[name]").each(function(){var g=$(this),f=g.attr("name"),h=g.val();d[f]=h});$.ajax({url:e.attr("action"),type:e.attr("method"),data:d,success:function(f){if(f=="success"){$(".contact-form").find(".form-message").addClass("success");$(".form-message span").text("Message Sent!")}else{$(".contact-form").find(".form-message").addClass("error");$(".form-message span").text("Error Sending!")}}});return false})});