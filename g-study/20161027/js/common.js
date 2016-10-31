$(function(){
	$('#btn_menu').click(function(){
		if ($(this).hasClass("open")) {
			// 메뉴 닫기
			$('#btn_menu, #gnb').removeClass("open");
			
		} else {
			// 메뉴 열기
			$('#btn_menu, #gnb').addClass("open");
			
		}
	});
});