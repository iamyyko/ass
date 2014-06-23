$(document).ready(function(){
	/* 메뉴바 마우스 오버시 활성화 */
	$('li').hover(
		function(){
			$(this).css("background-color","black");
		},
		function(){
			$(this).css("background-color","transparent");
		}
		);
	/* 부드러운 스크롤 이동 */
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing', function () {
		window.location.hash = target;
	});
	});
	
	$('#start_service').click(function(){
		var a = $(this).attr('value');
		if (a > 0){
			alert("start service");
		}
		else{
			alert("you need to login!");
		}
	});	

	
	$('.carousel').carousel({
		interval: 3000,
		pause: "mouseleave",
	});
});
