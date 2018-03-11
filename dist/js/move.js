function move(dom,json,callback){
	for(var i in dom.timer){
		clearInterval(dom.timer[i])
	}
	dom.timer = {};//定时器组
	for(let attr in json){
		dom.timer[attr] = setInterval(function(){
			if(attr == "opacity"){
				var iNow = parseInt(getStyle(dom,attr)*100);
			}else{
				var iNow = parseInt(getStyle(dom,attr))
			}
			//计算速度
			var speed = (json[attr] - iNow)/6
			var speed = speed >0 ?Math.ceil(speed) : Math.floor(speed);
		//终止运动；
		if(iNow == json[attr]){
			clearInterval(dom.timer[attr]);
			//判定所有运动终止
			delete dom.timer[attr];
			var index = 0;
			for(var i in dom.timer){
					index ++;
			}
				if(index == 0){
					if(callback){
						callback();
					}
				}
			}else{
				if(attr == "opacity"){
					dom.style.opacity = (iNow + speed)/100
				}else{
					dom.style[attr] = iNow + speed +"px"
				}
			}
		},30)
	}
}
function getStyle(DOM,name){
	if(DOM.currentStyle){
		return DOM.currentStyle[name]
	}else{
		return getComputedStyle(DOM,false)[name]
	}
}