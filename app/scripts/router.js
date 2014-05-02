var MainRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'singup': 'signup'
	},

	initialize: function(){
		console.log('hello');
	},

	home: function(){
		console.log('homeview');
		new HomeView();

	},

	signup: function(){
		console.log("what view?")
		new HomeView();
		new SignUpView();

	}

});