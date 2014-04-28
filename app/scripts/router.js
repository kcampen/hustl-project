var MainRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'singup': 'signup'
	},

	initialize: function(){
		console.log('hello');
	},

	home: function(){

	},

	signup: function(){
		new SignUpView();

	}

});