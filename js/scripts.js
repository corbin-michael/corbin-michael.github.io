$(document).ready(function(){
	
	$('#menu_left > li').click(function(){
		//add active class to menu item
		$('#menu_left > li').removeClass('menu_item_bg').css('color','#000');
		$('.sub_nav').fadeOut('fast');
		$(this).addClass('menu_item_bg').css('color', '#fff');
		//show children of that item
		$(this).children().show();
		//children(sub_nav) styles on mouseover
		$('.sub_nav > li').css('color', '#000');
		$('.sub_nav > li').mouseover(function(){
			$('.sub_nav > li').css('color', '#000');
			$(this).css('color','#fff');
		});	
		//styles when mouse leaves
		$('.sub_nav > li').mouseleave(function(){
			$(this).css('color','#000');
		})
	})



	//hide sub_nav when clicking off of it
	//put top level menu items back to normal
	$(document).click(function(event){
		if(!$(event.target).closest('#menu_left > li').length) {
			$('.sub_nav').fadeOut('fast');
			$('#menu_left > li').removeClass('menu_item_bg').css('color','#000');
		}
	})


});