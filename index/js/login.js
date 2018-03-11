

	$(function(){
		$('#userName').blur(function(){
		var sUser = $('#userName').val()
		if(sUser==""){
			$('.error1').animate({
				opacity:'1'
			})		
		}else{
			$('.error1').animate({
				opacity:'0'
			})
		}
	})
	$('#password').blur(function(){
		var sPssword = $('#password').val()
		if(sPssword==""){
			$('.error2').animate({
				opacity:'1'
			})		
		}else{
			$('.error2').animate({
				opacity:'0'
			})
		}
	})		
	})

$(function(){
			$("#btn").click(function(){
			// console.log(1);
//			$(this).attr("disabled","disabled");

			var sUser = $("input[name=user]").val();
			var sPass = $("input[name=pass]").val();
			console.log(sUser,sPass)
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				type:"POST",
				data:{
					status:'login',
					userID:sUser,
					password:sPass
				},
				success:function(res){			
			
					switch(res){
						case "0": $('.error').animate({
									opacity:'1'
								});
						break;
						case "2":$('.erro3').animate({
									opacity:'1'
									});
						break;
						default: $('.error').animate({
									opacity:'0'
								});
					}
				},
				error:function(){

					alert("服务器坏了")

				}
			})
		})
	})

	

	$(function(){ //可有可无的;	
		$('#btn').click(function(){
			//console.log(oCheck.checked);
			if($('#checkbox').checked){
				//选中 => 保存密码;
				setCookie("userName",$("#userName").val(),30);
				setCookie("password",$("#password").val(),30);
			}
		})
		// 第二个功能; 刷新的时候如果有 cookie 那么填入输入框;

		if(getCookie("userName")){
			oUser.value = getCookie("userName");
		}
		if(getCookie("password")){
			oPass.value = getCookie("password");
		}


	})
