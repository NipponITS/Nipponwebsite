<?php

	session_start(); 

	$string1 = "index";
	$string2 = "contact";


	if($_POST [fromPage]==$string1 && $_POST['captcha_index'] != $_SESSION['digit_index']) 
	{
		echo "<script> resetCaptcha(); </script>";
		print "Sorry, the code entered was incorrect!";
		session_destroy();
		die();
	}
	
	elseif($_POST [fromPage]==$string2 && $_POST['captcha'] != $_SESSION['digit']) 
	{
		echo "<script> resetCaptcha(); </script>";
		print "Sorry, the code entered was incorrect!";
		session_destroy();
		die();
	}
	
    $email_to = "information@nipponitsolutions.com";
    $email_subject = "[NTits website]";
               
    $first_name = $_POST['name']; // required
    $company_name = $_POST['company_name']; 
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";

    $email_message = "Form details below.\n\n";
	
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
	$email_subject .= " Enquiry from ".clean_string($first_name);
	if(strlen($company_name) > 0)
	{
		$email_subject .= " - ".clean_string($company_name);
	}
     
    $email_message .= "Name: ".clean_string($first_name)."\n";
    //$email_message .= "Last Name: ".clean_string($last_name)."\n";
	$email_message .= "Company Name: ".clean_string($company_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "How can we help you: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 


$email_message_reply ="Thank you for your interest in Nippon IT Solutions.\n Our team will get back with you very soon.\n";
$email_message_reply .="\n";
$email_message_reply .="\n";
$email_message_reply .="From,\n";
$email_message_reply .="Nippon IT Solutions\n\n";
$email_message_reply .="Address :\n";
$email_message_reply .="5, Vishal Apartment, S. V. P. Road, Kandivali West.\n";
$email_message_reply .="Mumbai - 400 067.\n";
$email_message_reply .="Maharashtra.\n";
$email_message_reply .="India.\n";
$email_message_reply .="\n";
$email_message_reply .="Direct Contact : +91 (0) 9821 884629 \n";
$email_message_reply .="Fax +91 (022) 28085940 \n";

// create email headers
$email_subject_reply = "Nippon IT Solutions - Enquiry";

$headers_reply = 'From: '.$email_to."\r\n".
'Reply-To: '.$email_to."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_from, $email_subject_reply, $email_message_reply, $headers_reply); 
	echo "<script> resetAfterSuccess(); </script>";
	echo "<script> resetCaptcha(); </script>";
	print "Thank you for your interest in Nippon IT Solutions.<br/> Our team will get back with you very soon.</b><br>";
?>