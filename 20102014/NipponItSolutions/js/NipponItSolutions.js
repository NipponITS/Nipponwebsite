function resetContactUs(){
	alert("hello");
	document.getElementById("name").value='';
	document.getElementById("company_name").value='';
	document.getElementById("email").value='';
	document.getElementById("telephone").value='';
	document.getElementById("comments").value='';
	document.getElementById("captcha_img").src = 'captcha_old.php?' + Math.random();
	document.getElementById("captcha").value = '';				
}