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