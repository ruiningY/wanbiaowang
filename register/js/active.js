
	$(function(){
		class List{
			constructor(){
			}
			load(index,ele){
				this.ele = ele;
				var that = this;
				 $.ajax("http://localhost/javascriptAJAX/project/php/list.php?index="+ index % 5).then(function(res){
				List.res = res
				that.init()
			},function(){
	
			})
		}
			init(){
				var html=""
				List.res = eval(List.res)


					for(var i=0;i<List.res.length;i++){
						html += `<li>
									<a href="http://www.wbiao.cn/michel-herbelin-g28306.html?act=Njg5ODAwMw==">
									<img src='${List.res[i].img}' alt="" >
									<img src='${List.res[i].img1}' alt="">
									<p><span>${List.res[i].produce}</span><i>${List.res[i].price}</i><b>${List.res[i].price2}</b></p>
									</a>
								</li>`	
							
					}
				$(this.ele).html(html)

				//console.log($('this.ele').html(html))
				}
			}
		new List().load(0,$("#list1"));
		
		new List().load(1,$('#list2'));

		
		new List().load(2,$("#list3"));
		
		new List().load(3,$('#list4'));
		
		new List().load(4,$("#list5"));
		
})
	

