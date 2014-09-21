function changeImage(id, img){
	document.getElementById(id).src=img;
}
				
$(document).ready(
	function(){
		   $("#dbServices").click(function(){
		   	$('#CenterDiv').load('pages/DatabaseServices.html');
		   }); 
		   $("#appServices").click(function(){
		   	$('#CenterDiv').load('pages/ApplicationServices.html');
		   });
		   $("#dbExpertise").click(function(){
		   	$('#CenterDiv').load('pages/DatabaseExpertise.html');
		   });
		   $("#contactUs").click(function(){
		   	$('#CenterDiv').load('pages/ContactUs.html');
		   });
	}
);