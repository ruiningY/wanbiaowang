$(function(){
		class ShopCar{
			constructor(){
				//this.howMany();
			}
			load(){
				//加载数据;
				var that = this;
				$.ajax("http://127.0.0.1:8020/project/goodslist/json/listing.json")
				.then(function(res){
					console.log("成功")
					that.res = res;
					that.rendring();
					that.init();
				},function(a,b){
					//请求数据失败;
					console.log("失败");
				}) //加载数据成功之后调用初始化方法;
			}
			init(){
				//绑定事件;
				var that = this;
				//console.log($(".goods_list ul").eq(0).find(".p1")[0])
				$(".goods_list").on("click",".p1",function(){
					console.log($(".goods_list"))

					//console.log(1)
					that.storage(this.id);
					that.howMany();
					that.showCar($('.wrp'));
					console.log(this.id);
				})
				//特效事件;
					$('.wrp>.wrp_t').children('div').find('#shopp').click(function(){
					$('.wrp #wrp_r').stop().show()
				})
		
				$('.wrp #wrp_r').children('p').find('#car').click(function(){
					$('.wrp #wrp_r').hide()
					
				})
			}
			
			rendring(){
				//根据获取的数据渲染页面;
				var html = "";
				for(var i = 0 ; i < this.res.length ; i++){
					html += `<ul>
							<li>
								<dl>
									<dd><a href="../goodsdetail/detail.html"><img src="${this.res[i].url}" alt=""></a></dd>
									<dt>
									<p class="p1" id="${this.res[i].id}">${this.res[i].gift}</p>
									<p class="p2"><a href="#">${this.res[i].produce}</p>
									<p class="p3"><b>${this.res[i].price}</b><i>${this.res[i].zhe}</i><span>${this.res[i].sale}</span></p>
									</dt>
								</dl>
							</li>
						</ul>`;
				}
				$(".goods_list ").html(html);
			
			}
			storage(id){
				
				if(!$.cookie("goods")){
					//不存在;
					$.cookie("goods",'[{"id":'+ id +',"num":"1"}]');
					console.log($.cookie("goods"))
				}else{
					//存在;
					//变成数组 => 操作cookie;
					var cookie = $.cookie("goods");
//					console.log(id)
					var cookieArr = JSON.parse(cookie)
					var same = false;
					for(var i = 0 ; i < cookieArr.length ; i++){
						if(cookieArr[i].id == id){ //存在当前的商品;
							cookieArr[i].num++;
							same = true;
							break;
						}
					}
					if(same == false){
						var obj = {
							id:id,
							num:1
						};
						cookieArr.push(obj);
					}
					//变成字符串 => 存进cookie;
					cookie = JSON.stringify(cookieArr);
					$.cookie("goods",cookie);
				}

				//console.log($.cookie("goods"))
			}
			howMany(){

				if($.cookie("goods")){
					var aCookie = JSON.parse($.cookie("goods"));
					var res = 0;
					for(var i = 0 ; i < aCookie.length ; i++){
						res += aCookie[i].num;
					}	

					$(".carrr").html(res);			
					return res;
				}
			}
			showCar(obj){
				obj.stop()
				.animate({
					right:0
				})
				if($.cookie("goods")){
					var aCookie = JSON.parse($.cookie("goods"));
					var html = "";
					
					
					for(var i = 0 ; i < aCookie.length ; i++){
						console.log(aCookie[i].id)
						html += `
								<li>
									<img src="${this.res[aCookie[i].id].url}"> 
									<div class="p4">商品数量:${aCookie[i].num}</div>
									<div class="p3"><b>${this.res[i].price}</b><i>${this.res[i].zhe}</i><span>${this.res[i].sale}</span></div>
								</li>
							`
					}
					$(".right_list").html(html)
				}		
			}
		}

		var shopcar = new ShopCar();
		shopcar.load();

	})