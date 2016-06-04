/**
**基本插件
**轮播carousel
**对话框dialog
**/

$(function(){

	//触摸滑动事件
	(function(){
	    var car = $("#carousel-generic")[0];
	    if(car !== null){
	        $('#carousel-generic').hammer().on('swipeleft', function(){
	           $(this).carousel('next');
	        });

	        $('#carousel-generic').hammer().on('swiperight', function(){
	           $(this).carousel('prev');
	        });
	    } 
	})();

	(function(){
		//对话框事件
	    var cover = $("#dialog_cover");
	    var simpleDialog = $("#simple_dialog");
	    var specifyDialog = $("#specify_dialog");
	    var speSureBtn = specifyDialog.find(".sure_btn");
	    var simSureBtn = simpleDialog.find(".sure_btn");
	    var shopBtn = $(".goods_promote .row .shopcar");

	    //点击购物车按钮弹出对话框
	    shopBtn.click(function(){
	    	//初始化对话框
	    	initDialog();

	    	cover.show();
	    	specifyDialog.show();
	    }); 
	    
	    //获取特殊对话框按钮
	    var subBtn = specifyDialog.find(".sub_btn");
	    var addBtn = specifyDialog.find(".add_btn");
	    var closeBtn = specifyDialog.find(".close_btn");
	    var goodsNum = specifyDialog.find(".num_control span");
	    var errorMsg = specifyDialog.find(".error_msg");

	    // 库存剩余数量
	    var maxNum = 10;
	    
	    // 订购数量
	    var value = +goodsNum.html();

	    addBtn.click(function(){
	    	value = +goodsNum.html();
	    	if(value == maxNum){
	    		goodsNum.html(maxNum);
	    	}else{
	    		goodsNum.html(++value);
	    	}
	    });

	    subBtn.click(function(){
	    	value = +goodsNum.html();
	    	if(value == 1){
	    		goodsNum.html(value);
	    	}else{
	    		goodsNum.html(--value);
	    	}
	    });

	    closeBtn.click(function(){
	    	cover.hide();
	    	specifyDialog.hide();
	    });

	    simSureBtn.click(function(){
	    	cover.hide();
	    	simpleDialog.hide();
	    });

	    speSureBtn.click(function(){
	    	if(value == "0"){
	    		errorMsg.html("请选择订购数量");
	    	}else{
	    		errorMsg.html("");
	    		simpleDialog.show();
	    		specifyDialog.hide();
	    	}
	    });
	})();
});

//初始化对话框	
function initDialog(){
	//定义初始值
	var initNum = 1;
	var specifyDialog = $("#specify_dialog");

	specifyDialog.find(".error_msg").html("");
	specifyDialog.find(".num_control span").html(initNum);
}