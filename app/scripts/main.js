$(function(){
	
		Parse.initialize('bCi5dBHvGtOYnVzhkhS8f0GFjeEKElpFEt2IIVeO', '0JO22w3zsha7daj0NCQ3hNsIAbAsO03eH1RKhxa8');


		console.log('welcome to the space jam');
		
		window.router = new MainRouter();

		window.users = new UsersCollection();

		Backbone.history.start();

});



