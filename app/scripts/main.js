$(function(){
Parse.initialize("bCi5dBHvGtOYnVzhkhS8f0GFjeEKElpFEt2IIVeO", "0JO22w3zsha7daj0NCQ3hNsIAbAsO03eH1RKhxa8");

console.log('welcome to the space jam');

$('.js-log-in').click(function(){

	var backer = new Parse.Backer();

	var email = $('.js-email').val();
	var password = $('.js-password').val();

	backer.set('emailData', email);
	backer.set('password', password);

	backer.signUp(null, {
		success: function(user) {

		},
		error: function(user, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
});

});