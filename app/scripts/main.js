$(function(){
	
		Parse.initialize('bCi5dBHvGtOYnVzhkhS8f0GFjeEKElpFEt2IIVeO', '0JO22w3zsha7daj0NCQ3hNsIAbAsO03eH1RKhxa8');


		console.log('welcome to the space jam');
		
		window.router = new MainRouter();

		window.users = new UsersCollection();

		Backbone.history.start();

		users.fetch({
			success: function(){
				users.each(function(user){
					new BrowseView({model: user});
				})
			},

			error: function(){
				console.log('boogers')
			}
		})

});

// $('.save-js-btn').on('click', function(){


// var userProfile = new User()
// 	if($('.name').val()) {userProfile.set({name: $('.name').val()})}; 
// 	if($('.bio').val()) {userProfile.set({bio: $('.bio').val()})};
// 	if($('.location').val()) {userProfile.set({phone: $('.location').val()})};  
// 	if($('.avatar').val()) {userProfile.set({avatar: $('.avatar').val()})}; 


// var newInfo = users.add(userProfile);

// new BrowseView({model: userProfile});

// userProfile.save();

// })




























