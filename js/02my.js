/*
* @Author: hp
* @Date:   2017-03-08 11:14:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-12 10:06:50
*/

$(function(){
	var num=0;
	$('.screen1').removeClass('no suofang');

	$('ol li').click(function(event){
		var n=$(this).index();/*// $(this).index()获取当前点击元素的索引值。*/
		num=$(this).index();
		$('section').stop().animate({'top': -100*n+'%'}, 100).fadeIn().fadeTo(400,0.9).fadeTo(400,1);
		$(this).stop().addClass('crrent');
		$(this).stop().siblings().removeClass('crrent');
		$('section>div').stop().eq(n).removeClass('no').siblings('').addClass('no');
		
	});
	
	 function aa(){
        			var timer;
	        		var num=0;
	        		timer=setInterval(function(){
	        			num=num+1;
	        			if(num>4){
	        				num=0;
	        			}
	        			$('.screen5 div .huanlian li ').eq(num).fadeIn().siblings().fadeOut();

	        		},1000)
        		}
        		aa();


	$('.music').click(function(event) {
		$(this).toggleClass('video');
		if($(this).hasClass('video')){
              $('audio').get(0).play();
		}else{
               $('audio').get(0).pause();
		}
	});

	$(document).mousewheel(function(e,d){
		num=num-(d);
		 if(num>6){
		 	num=6;
		 }
		 if(num<0){
		 	num=0;
		 }
		$('ol li').stop().eq(num).addClass('crrent').siblings('').removeClass('crrent');
		$('section').stop().animate({'top': -100*num+'%'}, 100).fadeIn().fadeTo(400,0.9).fadeTo(400,1);
		$('section>div').stop().eq(num).removeClass('no').siblings('').addClass('no');
	});
})


   