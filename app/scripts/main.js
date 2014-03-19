$(function(){
Parse.initialize("bCi5dBHvGtOYnVzhkhS8f0GFjeEKElpFEt2IIVeO", "0JO22w3zsha7daj0NCQ3hNsIAbAsO03eH1RKhxa8");


console.log('welcome to the space jam');

$('.js-log-in').click(function(){

// can user new User or Parse.User
	var user = new Parse.User();   

	var userName = $('.js-username').val();
	var emailData = $('.js-email').val();
	var password = $('.js-password').val();
	console.log(userName);
	console.log(emailData); 

	user.set('username', userName);
	user.set('email', emailData);
	user.set('password', password);

	user.signUp(null, {
	success: function(user) {
		$('.username').val();
		$('.js-email').val();
		$('.js-password').val();
		$('.modal').modal('hide');
		alert('boom')       
      },
      error: function(user, error) {
      	console.log(error)
      	alert('error')
        
      }
      });

});

});



