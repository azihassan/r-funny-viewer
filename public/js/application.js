$(document).ready(function() {
	$('#entry').bind('keypress', function(e) {
		var code = e.keyCode || e.which;
		alert(code);
		
		if(code == 13)
		{
			$(this).animate({
				'scrollBottom': $(this).next().offset().top().scrollBottom();
			});
		}
	});
});
