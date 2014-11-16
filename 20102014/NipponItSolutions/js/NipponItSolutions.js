$(document).ready(function(){
	$("#contactUs").validate({
		debug: false,
		rules: {
			name: "required",
			telephone: "required",
			email: {
				required: true,
				email: true
			},
			comments: "required",
			captcha: "required"
		},
		errorPlacement: function(){
			return false;
		},
		submitHandler: function(form) {
			$.post('js/php/process.php', $("#contactUs").serialize(), function(data) {
				$('#results').html(data);
			});
			document.getElementById('captcha_img').src = 'js/php/captcha.php?' + Math.random();
			document.getElementById('captcha').value = '';
		}
	});		
}
);	

function clearFormPlements(ele) {	 
		$('#results').html("");
		clearFormElements(ele);
	}
	
function clearFormElements(ele) {
	    $(ele).find(':input').each(function() {
	        switch(this.type) {
	            case 'text':
	            case 'textarea':
	                $(this).val('');
					$(this).removeClass("error");
	                break;
	        }
	    });
}
	
function resetAfterSuccess() {
	clearFormElements(document.getElementById("contactUs"));
}