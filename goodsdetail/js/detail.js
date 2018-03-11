	
		 $(function () { 
//商品详情放大效果js
		 	//选小图片换大图片
          	$('.bshow a').children('img').eq(0).show().siblings('img').hide()
				$('.picx a').mouseenter(function(){		
					$(this).addClass('img1').siblings('a').removeClass('img1')
					$(this).find('img').addClass('imgg1').siblings('img').removeClass('imgg1')
					$('.bshow a').children('img').eq($(this).index()).show().siblings('img').hide()
                    $('.shade img').eq($(this).index()).show().siblings('img').hide()
				})	
			//点击左键图片向左滑动
//			$('.le').click(function(){			
//			$(".picx").animate({marginLeft:"-81px"},500,function(){			
//				$(".picx a").eq(0).appendTo($(".picx"));
//				console.log($(this))
//				$(".picx").css('marginLeft','0')	
//			})
//		})
//		//点击右键图片向右滑动
//		$('.re').click(function(){
//			$(".picx").css('marginLeft','-81px')
//			$(".picx a").eq(0).appendTo($(".picx"));
//			$(".picx").animate({
//				marginLeft:"0"},500,function(){
//			})
//		})
			//图片放大镜效果
            var shadeWidth = $('.shade').width(),//阴影的宽度  
                shadeHeight = $('.shade').height(),//阴影的高度  
                middleWidth = $('.bshow').width(),//容器的宽度  
                middleHeight = $('.bshow').height(),//容器的高度  
                bigImgWidth = $('.shade img').width(),//放大图片盒子的宽度  
                bigImgHeight = $('.shade img').height(),//放大图片盒子的高度  
                rateX = bigImgWidth / middleWidth,//放大区和遮罩层的宽度比例2  
                rateY = bigImgHeight / middleHeight;//放大区和遮罩层的高度比例2  
  
            //当鼠标移入与移出时阴影与放大去显现/消失  
            $('.bshow').hover(function() {  
                $('.shade').show();  
                $('.big').show();  
            }, function() {  
                $('.shade').hide();  
                $('.big').hide();  
            }).mousemove(function(e) {//当鼠标移动时，阴影和放大区图片进行移动  
                //记录下光标距离页面的距离  
                var x = e.pageX,  
                    y = e.pageY;  
  
                //设置遮罩层的位置  
                $('.shade').offset({  
                    top: y-shadeHeight/2,  
                    left: x-shadeWidth/2  
                });       
  
                //获取遮罩层相对父元素的位置  
                var cur = $('.shade').position(),  
                    Top = cur.top,  
                    Left = cur.left,  
                    hdiffer = middleHeight - shadeHeight,  
                    wdiffer = middleWidth - shadeWidth;  
  
                if ( Top < 0)  Top = 0;  
                else if ( Top > hdiffer)  Top = hdiffer;  
                if (Left < 0)Left = 0;  
                else if (Left > wdiffer) Left =wdiffer;  
  
                //判断完成后设置遮罩层的范围  
                $('.shade').css({  
                    top: Top,  
                    left: Left  
                });       
                //设置放大区图片移动  
                $('.shade img').css({  
                    top: - Top*rateY*3/2,  
                    left: - Left*rateX*3/2  
                });  
            });     
            
            
            
 //加载数量
 	
 		
				 var i=1;
				$('.add').click(function(){
					
					++i
					$('.num').val(i);
				})		
				$('.mins').click(function(){
					if(i<=1){
						i==null
					}else{
						i--;
						$('.num').val(i);
					}
				})			
	
            
//滑到立即购买时导航栏停止再顶部 js   
       
       //当滑到立即购买的地方的时候，让条定位改变     
           	$(window).on('scroll',function(){	
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				console.log(scrollTop)			
    			if(scrollTop > $("#buynow").offset().top) {
            	$("#buynow").css({
            		position: 'fixed',
            		top : 0
            	})			
    			}			
    			if(scrollTop < 1256){
    				$("#buynow").css({
            		position: 'absolute'
            	})
    			}						
    	})
            	     
            
            
        }); 
	

//底部选择部分

				$('.i_b ul').eq(0).show().siblings('ul').hide()
				$('.i_t .like_t ').find('li').mouseenter(function(){
					$(this).addClass('like1').siblings('li').removeClass('like1')
					$('.i_b').find('ul').eq($(this).index()).show().siblings('ul').hide()
				})
				
				
				
