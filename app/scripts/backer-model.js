var User = Parse.Object.extend('User');


var UsersCollection = Parse.Collection.extend({
	model: User

});

// window.users = new UsersCollection();