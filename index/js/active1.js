
$(function(){
		class List{
			constructor(){
			}
			load(index,ele){
				this.ele = ele;
				var that = this;
				 $.ajax("http://localhost/javascriptAJAX/project/php/list1.php?index="+ index % 5).then(function(res){
				List.res = res
				that.init()
			},function(){
	
			})
		}
			init(){
				var html=""
				List.res = eval(List.res)
				console.log(List.res)
					for(var i=0;i<List.res.length;i++){
						html += `<a href="">		
									<img src='${List.res[i].img}' alt="" >
									<img src='${List.res[i].img1}' alt="">
									<p class="p1">${List.res[i].produce}</p>
									<p><span>${List.res[i].price}</span><span>${List.res[i].price2}</span></p>
									
								</a>`	
							
					}
				$(this.ele).html(html)
				//console.log($(this.ele).html(html))
				}
			}
		new List().load(1,$('#entry1'));
		//console.log($('#entry1'))
		
		new List().load(1,$('#entry2'));

		
		new List().load(2,$("#entry3"));
		
		new List().load(3,$('#entry4'));
		
		new List().load(4,$("#entry5"));
		
		
		
})