function clearFormElementsWithResult(ele) {	 
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

function resetCaptcha() {
	var captcha_img = 	document.getElementById('captcha_img');
	if(captcha_img != null)
	{
		captcha_img.src = 'js/php/captcha.php?' + Math.random();
	}

	var captcha_text = 	document.getElementById('captcha');
	if(captcha_text != null)
	{
		captcha_text.value = '';
	}

	var captcha_img_index = document.getElementById('captcha_img_index');
	if(captcha_img_index != null)
	{
		captcha_img_index.src = 'js/php/captcha_index.php?' + Math.random();
	}

	var captcha_text_index = document.getElementById('captcha_index');
	if(captcha_text_index != null)
	{
		captcha_text_index.value = '';
	}
}