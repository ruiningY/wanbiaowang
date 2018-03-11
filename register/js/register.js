$(function(){
	 var alltrue =[0,0,0]
	 //console.log($('#phone'))
		$('#phone').blur(function(){
				var sPhone=$('#phone').val()
				var reg=/^1[3578]\d{9}$/g
				if(reg.test(sPhone)){
					$('.error1').hide()
					alltrue[0]=1
				}else{
					$('.error1').show()
					alltrue[0]=0
				}
		})
		$('#gets').click(function(){	
			//console.log($('#gets'))
		var str="0123456789abcdefghijklmnopqistuvwxyz";
			var res=""
			for(var i=0;i<4;i++){
				//遍历str字符串
				res+= str[Math.round(Math.random()*(str.length-1))]
				$('#gets').html(res);
			}	
		})
//验证码

	
	$('#vcan').blur(function(){
		var sGet=$('#gets').val()
		var sVcan =$('#vcan').val()
		if(sGet==sVcan){
			$('.error2').hide()
			alltrue[1]=1
		}else{
			$('.error2').hide()
			alltrue[1]=0
		}
	})
$('#password').blur(function(){
		var sPass =$('#password').val()
		var reg = /^\w{6}$/gi;
		if(reg.test(sPass)){
					$('.error4').hide()
					alltrue[2]=1
				}else{
					$('.error4').show()
					alltrue[2]=0
				}
	})

//确认密码

	
	$("#rpassword").blur(function(){
		var rPassword=$("#rpassword").val()
		var sPass =$('#password').val()
	if(sPass == rPassword){
		$('.error5').hide()
		alltrue[3]=1
	}else{
		$('.error5').show()
		alltrue[3]=0
	}
	})
	
	$('#btn').click(function(event){
	var alltrue = 0;
	for(var i = 0;i < alltrue.length;i++){
		if(alltrue[i] == 0){
			var evt = event || window.event
			if(evt.preventDefault){
				evt.preventDefault()
			}else{
				window.event.returnValue = 0;
			}
			break;
		}
	}

})
	
		$("#btn").click(function(){
			// console.log(1);
			$(this).attr("disabled","disabled");

			var sUser = $("#phone").val();
			var sPass = $("#password").val();

			//console.log(sUser,sPass)

			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:sUser,
					password:sPass
				},
				type:"POST"
			})
			.then(function(res){
				
				//成功;
				setTimeout(function(){

					switch(res){
						case "0": alert("用户名重名!");
						break;
						case "1":alert("注册成功快去登录吧，需要等一会儿才能跳转到登录页面哦");
						
						break;
						case "2":alert("数据库报错!");
						break;
					}	

				}, 300);

		})
	})	

})