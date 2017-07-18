/*
 notifyMe.js v1.0.0
 Copyright (c)2014 Sergey Serafimovich
*/



// (function ( $ ) {
// 	"use strict";
	
//     $.fn.notifyMe = function( options ) {

//         // Default options.
//         var settings = $.extend({
//         	// Error and success message strings
//             msgError404: "Service is not available at the moment. Please check your internet connection or try again later.",
// 			msgError503: "Oops. Looks like something went wrong. Please try again later.",
// 			msgErrorValidation: "This email address looks fake or invalid. Please enter a real email address.",
// 			msgErrorFormat: "Your e-mail address is incorrect.",
// 			msgSuccess: "Congrats! You are in list."
// 		}, options );

    
//     	var $this = $(this);
// 		var input = $(this).find("input[name=email]");
		
// 		var action = $(this).attr("action");
// 		var note = $(this).find(".note");
// 		var message = $("<div class='col-lg-12 align-center' id='message'></div>").appendTo($(this));
// 		var icon = $("<i></i>")
// 		var iconProcess = "fa fa-spinner fa-spin";
// 		var iconSuccess = "fa fa-check-circle";
// 		var iconError = "fa fa-exclamation-circle";

// 		input.after(icon);
    
// 		$(this).on("submit", function(e){
// 			e.preventDefault();
// 			var email = input.val();
// 			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
// 			if(re.test(email)) {

// 				$("#email").val("");

// 				$('.cust-model').fadeIn();
// 				// cust-model
// 				// alert("Email Sent");

// 				icon.removeClass();
// 				icon.addClass(iconProcess);
// 				$(this).removeClass("error success");
// 				message.text("");
// 				note.show();
// 				console.log(email);
// 				$.ajax({
// 					type: "POST",
// 					url: action,
// 					data: {email: email},
// 					dataType: "json",
// 					crossDomain: true,
// 					success: function(data){
// 						if (data == 'Success') {
// 							$("#message").text("Congrats! You are in list.");
// 							$("#email").val('');
// 							return false;
// 						}

// 						$this.addClass("error");

// 						note.hide();
// 						// Change the icon to error
// 						icon.removeClass();
// 						icon.addClass(iconError);
						
// 						// Determine the status of response and display the message
// 						if(data.status == 404) {
// 							message.text(settings.msgError404);
// 						} else {
// 							message.text(settings.msgError503); 
// 						}
// 					},
// 				});


// 				// .done(function(data){
// 				// 	// Hide note
// 				// 	note.hide();
				
// 				// 	if(status == "success") {
// 				// 		// Add success class to form
// 				// 		$this.addClass("success");
// 				// 		// Change the icon to success
// 				// 		icon.removeClass();
// 				// 		icon.addClass(iconSuccess);
// 				// 		$('input').val("");
// 				// 		input.trigger('input');
// 				// 		message.text(settings.msgSuccess);	
// 				// 	} else { 
// 				// 		// Add error class to form
// 				// 		$this.addClass("error");
// 				// 		// Change the icon to error
// 				// 		icon.removeClass();
// 				// 		icon.addClass(iconError);

// 				// 		if (data.type == "ValidationError") { 
// 				// 			message.text(settings.msgErrorValidation);$('input').val("");
// 				// 		} else {
// 				// 			message.text(settings.msgError503);
// 				// 		}
// 				// 	}
					
// 				// })
				
// 			} else {$('input').val("");
// 				// Add error class to form
// 				$(this).addClass("error");
// 				// Hide note
// 				note.hide();
// 				// Change the icon to error
// 				icon.removeClass();
// 				icon.addClass(iconError);
// 				// Display the message
// 				message.text(settings.msgErrorFormat);
// 			}
// 		});
//     };
 
// }( jQuery ));



$('#submit_from').click(function(event){
	
	event.preventDefault();
		$('.email_id').html('');

	if($('#email').val()==""){

		// alert('in valid');
		$('.email_id').html('Email Required');
		return false;

	}else{

		var email = $('#email').val();
		$.ajax({

			type:"POST",
			url:"http://zippyshoes.com/home/tmmmonk_email",
			data:{
				email:email,
			},
			success:function(result){

				if(result=="exist"){


					console.log('exist');
					$('.cust-heading').html("We know you dear friend,we will get back to you soon!");
					$('.cust-model').fadeIn();


				}else if(result=="saved"){

					console.log('saved');
					$('.cust-heading').html("Thank you for getting in touch!");
					$('.cust-model').fadeIn();

				}
			},
			error:function(error){


			}
		})
		// alert('valid');
	}
})


$('#ok').click(function(){
	$('.cust-model').fadeOut();
})



$('.cross').click(function(){
	$('.cust-model').fadeOut();
})

