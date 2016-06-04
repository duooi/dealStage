$(function(){
	//导航事件
	var nav = $("#header_nav ul");
	var navLi = nav.find("li");

	navLi.click(function(){
		navLi.removeClass('active');
		$(this).addClass("active");
	});

    //商品详情页收藏效果
    var collect = $(".goods_collect");

    collect.click(function(){
    	var status = $(this).find(".status_text").html()
    	if(status == "收藏"){
    		$(this).find("img").attr("src","../../images/localProduct/icons/star_02.png");
    		$(this).find(".status_text").html("已收藏");
    	}else{
    		$(this).find("img").attr("src","../../images/localProduct/icons/star_01.png");
    		$(this).find(".status_text").html("收藏");
    	}
    }); 
});