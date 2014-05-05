var MainRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'singup': 'signupPage'
	},

	initialize: function(){
		console.log('hello');
	},

	home: function(){
		console.log('homeview');
		new HomeView();
		new BannerView();
		new FooterView();

	},

	signupPage: function(){
		console.log('hello?')
		$('body').empty();
		new HomeView();
		new SignUpView();
		new FooterView();

	}

});