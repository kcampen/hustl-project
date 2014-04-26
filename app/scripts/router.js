var MainRouter = Backbone.Router.extend({

	routes: {
		"": "home",
		"singup": "signUp"
	},

	initialize: function(){
		console.log("hello");
	},

	home: function(){

	},

	signUp: function(){

		$('.jumbotron').html('');
		new SignUpView();

	}

})