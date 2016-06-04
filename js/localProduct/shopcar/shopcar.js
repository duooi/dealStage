$(function(){
	//设置默认地址
	(function(){
		var userAddr = $(".user_addr");
		var editBtn = $(".edit_list .addr_default");

		editBtn.click(function(){
			userAddr.find("p span").remove();
			$(this.parentNode).prev().find("p").prepend('<span>【默认地址】</span>');
		});
	})();
	
	//编辑购物车选项
	(function(){
		var classify = $(".goods_classify");
		var checkBox = $(".goods_classify .checkbox");
		var allCheckBox = $("footer .checkbox");
		var delBtn = $("footer .del_btn");
		var numControl = $(".goods_num");
		var subBtn = numControl.find(".sub_btn");
		var addBtn = numControl.find(".add_btn");
		var numValue = numControl.find("span");

		checkBox.click(function(){
			$(this).toggleClass("active");
			sumPrice();
		});

		allCheckBox.click(function(){
			$(this).toggleClass("active");
			checkBox.addClass("active");
			if(!$(this).hasClass("active")){
				checkBox.removeClass("active");
			}
			sumPrice();
		});

		delBtn.click(function(){
			checkBox.each(function(index){
				if(checkBox.eq(index).hasClass("active")){
					var target = checkBox.eq(index)[0].parentNode.parentNode.parentNode.parentNode;
					var num = $(target.parentNode).find(".row").length;
					if(num == 1){
						$(target.parentNode).remove();
					}else if(num > 1){
						$(target).remove();
					}
				}
			});
			sumPrice();
		});

		subBtn.each(function(index){
			$(this).click(function(){
				var num = numValue.eq(index).html();
				if(num == 1){
					numValue.eq(index).html(num);
				}else{
					numValue.eq(index).html(--num);
				}
				sumPrice();
			});
		});
		

		addBtn.each(function(index){
			$(this).click(function(){
				var num = numValue.eq(index).html();
				if(num == 10){
					numValue.eq(index).html(num);
				}else{
					numValue.eq(index).html(++num);
				}
				sumPrice();
			});
		});
	})();

	//地址块滑动效果
	(function(){
		var addrWrap = $(".addr_wrap");
		var addrArea = $(".addr_area");
		var userAddr = $(".user_addr");
		var editList = $(".edit_list");
		var edlW = editList.css("width");
		var adrW = userAddr.css("width");

		editList.css("right",-parseInt(editList.css("width"))+"px");

		//为每个地址块加滑动事件
		addrArea.each(function(index){
			var editEle = addrArea.eq(index).find(".edit_list");
			var addrEle = addrArea.eq(index).find(".user_addr");

			var hammer = new Hammer(addrArea.eq(index));
			hammer.on("swipeleft",function(e){
				// console.log(e.cuurentTarget);
				editEle.css("right",0);
				addrEle.css("right",parseInt(edlW)+"px");
			}).on("swiperight",function(e){
				editEle.css("right",-parseInt(edlW)+"px");
				addrEle.css("right",0);
			});
		});
		
		//删除地址
		var delEle = editList.find(".addr_delete");
		delEle.click(function(e){
			$(e.target.parentNode.parentNode).remove();
		});
	})();
});

//计算商品总价
function sumPrice(){
	var classify = $(".goods_classify");
	var row = classify.find(".row");
	var sum = $("footer .price_sum span");
	var sumPrice = 0;

	row.each(function(index){
		if(row.eq(index).find(".checkbox").hasClass("active")){
			var num = +$(this).find(".goods_num span").html();
			var singlePrice = +$(this).find(".goods_price span").html();
			sumPrice += num*singlePrice;
		}
	});

	//保留两位小数
	sum.html(sumPrice.toFixed(2));
}