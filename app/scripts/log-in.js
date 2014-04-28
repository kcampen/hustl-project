// can user new User or Parse.User
$('.js-log-in').click(function(){

// Create new user with Parse parse.
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
						alert('boom');       
						},
      	error: function(user, error){
      	console.log(error)
				alert('error');
        
      }
      	});
});