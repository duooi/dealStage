$(function(){
	//表单元素聚焦状态
	(function(){
		var $ele = $("input,textarea");

		$ele.focus(function(){
			$(this).addClass("focus");
		});
		$ele.blur(function(){
			$(this).removeClass("focus");
		});
	})();

	/*********************
	*个人中心收货地址管理*
	*********************/
	(function(){
		var addrWrap = $(".addr_wrap");
		var addrArea = $(".addr_area");
		var userAddr = $(".user_addr");
		var editList = $(".edit_list");
		var inputArea = $("form input");
		var checkBox = $(".set_default .checkbox");

		// 表单聚焦状态
		inputArea.focus(function(){
			$(this).addClass("focus");
		}).blur(function(){
			$(this).removeClass("focus");
		});

		//设为默认状态
		checkBox.click(function(){
			$(this).toggleClass("active");
		});

		editList.css("right",-parseInt(editList.css("width"))+"px");

		//地址块滑动操作

		var edlW = editList.css("width");
		var adrW = userAddr.css("width");

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
	

	/*****************
	*个人中心我的预约*
	*****************/
	(function(){
		var cover = $("#dialog_cover");
		var detailContent = $("#detail_content");
		var detailBtn = $(".btn_group .detail");
		var evalBtn = $(".btn_group .evaluate");
		var closeBtn = $(".close_btn");
		var starList = $(".evaluate_score ul li");
		var scoreValue = $(".score_value");

		// 详细内容
		detailBtn.click(function(){
			cover.show();
			detailContent.show();
		});

		// 关闭详细内容
		closeBtn.click(function(){
			cover.hide();
			detailContent.hide();
		});

		//综合评分
		var clsArr = [];

		starList.each(function(){
			clsArr.push($(this).attr("class"));
		});

		starList.each(function(index){
			$(this).click(function(){
				for(var i=0;i<starList.length;i++){
					starList.eq(i).attr("class",clsArr[i]);
				}

				for(var i=0;i<index+1;i++){
					var cls = starList.eq(i).attr("class")+"_click";
					starList.eq(i).addClass(cls);
				}
				scoreValue.html(index+1+".0分");
			});
		});
	})();

	/*********************
	**个人中心收藏页**
	*********************/
	(function(){
		var $dateList = $(".date_list");
		var selectTime = $(".select_time");
		var dateEle = $dateList.find("li");
		var editBtn = $(".date_edit");
		var promoteCheckBox = $(".goods_promote .checkbox");
		var footArea = $("footer");
		var footCheckBox = $("footer .checkbox");
		var buyBtn = $(".buy_btn");
		//商铺收藏页的删除按钮
		var delBtn1 = $(".col-xs-9 .btn1");
		//商品收藏页的删除按钮
		var delBtn2 = $(".col-xs-9 .btn2");

		//选择时间段
		$(".select_time").click(function(event){
			event = event || window.event;
			$dateList.toggle();
			event.stopPropagation();
		});

		$(document).click(function(){
			$dateList.hide();
		});

		dateEle.click(function(){
			selectTime.html($(this).html());
		});

		//编辑收藏内容
		editBtn.click(function(event){
			event = event || window.event;
			event.stopPropagation();
			promoteCheckBox.removeClass("active").toggle();
			if(editBtn.html() == "编辑"){
				editBtn.html("完成");
			}else{
				editBtn.html("编辑");
			}
			footArea.toggle();
		});

		promoteCheckBox.click(function(){
			$(this).toggleClass("active");
		});

		footCheckBox.click(function(){
			$(this).toggleClass("active");
			promoteCheckBox.addClass("active");
			if(!$(this).hasClass("active")){
				promoteCheckBox.removeClass("active");
			}
		});

		//商铺收藏页删除按钮
		delBtn1.click(function(){
			var allEle = $(".promote_inner .row");
			for(var i=0;i<allEle.length;i++){
				if($(allEle[i]).find(".checkbox").hasClass("active")){
					allEle[i].remove();
				}
			}
		});

		//商品收藏页删除按钮
		delBtn2.click(function(){
			var allEle = $(".promote_inner .row .col-xs-6");
			for(var i=0;i<allEle.length;i++){
				if($(allEle[i]).find(".checkbox").hasClass("active")){
					allEle[i].remove();
				}
			}
		});
	})();
});