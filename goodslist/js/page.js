

    class Pagination{
        constructor(num){
            num = num ? num: 4;
            this.showNum = num;
            if(!Pagination.res){
                 this.load();
            }else{
                this.init();
            }
        }
        load(){
            //获取数据; 
            var that = this;
            $.ajax("http://127.0.0.1:8020/javascriptAJAX/project/json/listing.json")
            .then(function(res){
                //成功;
                //console.log(res);
                Pagination.res = res; //成功请求的json;
                that.init();
            },function(){
                //失败;
            })
        }
        init(){
            var that = this;
            $(".pagination").pagination(Pagination.res.length,{
                items_per_page:this.showNum, //一页显示多少条;
                callback:function(index){
                    that.index = index; //当前显示的页数;
                    that.rendringPag();
                }
            });
        }
        rendringPag(){
            //console.log(this.index);
            var html = "";
            for(var i = this.index * this.showNum ; i < (this.index + 1)* this.showNum; i++){
                if( i < Pagination.res.length){
                    html += html+=`<ul>
							<li>
								<dl>
									<dd><a href=""><img src="${Pagination.res.url}" alt=""></a></dd>
									<dt>
									<p class="p1">${Pagination.res.gift}</p>
									<p class="p2"><a href="#">${Pagination.res.produce}</p>
									<p class="p3"><b>${Pagination.res.price}</b><i>${Pagination.res.zhe}</i><span>${Pagination.res.sale}</span></p>
									</dt>
								</dl>
							</li>
						</ul>`;
                } 
            }
            $(".goods_list").html(html);
        }
    }
    new Pagination();
    $("#setPage").change(function(){
        new Pagination($(this).val());
    })
