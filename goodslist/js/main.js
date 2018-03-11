//顶部消失
				
		$('#index').children('.iconfont').click(function(){
			$('#index').hide()
		})	


//顶部轮播图js


$(function(){
	var count = 0;
	var timer=null;
	//
	$(".banner .b-list").eq(0).show().siblings("li").hide();
//划过小球时，图片切换
	$(".showq span").mouseover(function(){
		count=$(this).index();
		$(this).addClass('active').siblings('span').removeClass('active');
		$('.banner .b-list').eq(count).children('img').animate({height:"110%",width:"110%",transition:"all 1s"},500)
		$('.banner .b-list').eq(count).fadeIn(1000).siblings('li').fadeOut(1000)
	})
	function change(){
		$('.showq span').stop().eq(count).addClass('active').siblings().removeClass('active');
		$('.banner .b-list').eq(count).children('img').stop().animate({height:"110%",width:"110%",transition:"all 1s"},500).siblings('li').children('img').animate({
			height:"100%",
			width:"100%"
		})
		$('.banner .b-list').eq(count).stop().fadeIn(1000).siblings('li').fadeOut(1000)
	}
//点击右键切换图片
	$('.right').click(function () {  
		stop();
		if(count==$('.b-list').length){
			count = 0		
		}
		change();
		count++;	
		 })

//点击左键切换图片
        $('.left').click(function () { 
        	stop();
        	if(count == 0){
        		count=$('.b-list').length
        	}
        	count--
        	change();
    });        
//移入时停止计时器,移除时自动轮播
	function autoPlay(){
		 timer =setInterval(function(){
			$('.right').click()			
		},2000)
	};
	$('#ban div').mouseover(function(){
		clearInterval(timer);
//		$(".right").stop().animate({opacity:0.3,})
//		$(".left").stop().animate({opacity:0.3,})
		
	}).mouseout(function(){
		clearInterval(timer);
		autoPlay();		
//		$(".right").stop().animate({opacity:0})
//		$(".left").stop().animate({opacity:0,})
		
	});

});

			



//中间轮播图部分
	$(function(){
		$('.left1').click(function(){
			$(".ban3_inner .list_b").animate({marginLeft:"-1200px"},500,function(){
				$(".list_b>li").eq(0).appendTo($(".ban3_inner .list_b"));
				$(".ban3_inner .list_b").css('marginLeft','0')
			})
		})
		$('.right1').click(function(){
			$('.ban3_inner .list_b').css('marginLeft','-1200px')
			$('.ban3_inner .list_b').animate({marginLeft:'0'},500,function(){
				$('.list_b>li').eq(3).appendTo($('.ban3_inner .list_b'));
			
			})
		})
		
	})	


//小块轮播
$(function(){
	var count = 0;
	var time=null;
	//
	$(".slip li").eq(0).show().siblings("li").hide();
//划过小球时，图片切换
	$(".select span").mouseenter(function(){
		count=$(this).index();
		$(this).addClass('act').siblings('span').removeClass('act');
		$('.slip li>a').find('img').stop().eq(count).animate({
			height:"110%",
			width:"110%",
			transition: 'all 1s'
		})
		$('.slip li').eq(count).fadeIn('slow').siblings('li').fadeOut(1000)
	})
	function change(){
		$('.select span').stop().eq(count).addClass('act').siblings().removeClass('act');
		$('.slip li>a').find('img').stop().eq(count).animate({
			height:"110%",
			width:"110%",
			transition: 'all 1s'
		})
		.siblings('li').children('a').children('img').animate({
			height:"100%",
			width:"100%"
		})
		$('.slip li').stop().eq(count).fadeIn('slow').siblings('li').fadeOut(1000)
		
	}
//点击右键切换图片
	$('.right2').click(function () {  
		stop();
		if(count==$(".slip li").length){
			count = 0		
		}
		change();
		count++;	
		 })

//点击左键切换图片
        $('.left2').click(function () { 
        	stop();
        	if(count == 0){
        		count=$(".slip li").length
        	}
        	count--
        	change();
    });        
//移入时停止计时器,移除时自动轮播
	function autoPlay1(){
		 time =setInterval(function(){
			$('.right2').click()			
		},2000)
	};
	$('.ban2').mouseenter(function(){
		clearInterval(time);
	}).mouseleave(function(){
		clearInterval(time);
		autoPlay1();			
	});

});
	




//客服

	$('.service').find('img').mouseover(function(){
		$('.service div').show()	
	})
		$('.services').find('i').click(function(){
			$('.services').hide()
		})	




//二维码js
		
	$(function(){
		$('.nvv li').eq(0).show().siblings('li').hide();
		$('.navv').find('span').mouseover(function(){
				$(this).addClass('navv_l').siblings('span').removeClass('navv_l')
				$('.nvv li').eq($(this).index()).show().siblings('li').hide()
		})
		
		$('.fot .fot_l').eq(0).show().siblings('li').hide();
		$('.foot').find('span').mouseover(function(){
			$(this).addClass('foot_l').siblings('span').removeClass('foot_l')
			$('.fot .fot_l').eq($(this).index()).show().siblings('li').hide()
		})
		
		$(".fot .fot_r").eq(0).show().siblings('li').hide();
		$('.foob').find('span').mouseover(function(){
			
			$(this).addClass('foot_r').siblings('span').removeClass('foot_r')
			$('.fot .fot_r').eq($(this).index()).show().siblings('li').hide();
		})
	})
		
		
	




//回到顶部js

	$(function(){				
		$('.wrp_l').find("a").mouseover(function(){
			$(this).children('div').stop().show().animate({
				
			opacity:'1',
			right:'48px'
			
			})
			$(this).css({
				background:'#999999',	

			})
			$(this).children('i').css({
					color:'#fff'
				})
			})
		$('.wrp_l').find("a").mouseout(function(){
			$(this).children('div').stop().hide().animate({
				opacity:'0',		
			})
			$(this).css({
				background:'#eee',	
			})
			$(this).children('i').css({
					color:'#999999'
				})
			})
//		$('.wrp>.wrp_t').children('div').find('#shopp').click(function(){
//				$('.wrp #wrp_r').stop().show()
//			})
//	
//			$('.wrp #wrp_r').children('p').find('#car').click(function(){
//				$('.wrp #wrp_r').hide()
//				
//			})
	$(".wrp .wrp_t").find('.wrp_l ').children('div').click(function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(document.body.scrollTop){
				document.body.scrollTop=0;
				
			}else{
				document.documentElement.scrollTop=0;
			}
	})
})		
	$('.service').find('img').mouseover(function(){
		$('.service div').show()	
	})
		$('.services').find('i').click(function(){
			$('.services').hide()
		})	


//楼梯
$('#step .step li').click(function(){
	//获取下标
	var i =$(this).index()
	//console.log(i)
	var $div=$("body #stairs").eq(i)//改变的楼层
	console.log($("body #stairs").eq(i))
	//设置根据滚动高度的跳转效果
		$('html,body').animate({
			scrollTop:$div.offset().top
		})
		
	})

//
//////吸顶----------------------------------
//function ceil(){
//	$(window).scroll(function(){
//		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
////		console.log(scrollTop)
//		var ceilh=$("#hotbox").offset().top;
//		var timebuyh = $('#timebuy').offset().top ;	//显示抢购的高度
//		if(scrollTop>=ceilh){
//			$("#ceil").stop().slideDown()
//		}else{
//			$("#ceil").stop().slideUp()
//		}
//// 楼梯出现的效果也写在里面
//		if(scrollTop >= timebuyh){
//			$('#floorbox').stop().slideDown(400);
//		}else{
//			$('#floorbox').stop().slideUp(400);
//		}
//	})
//	
