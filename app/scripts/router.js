var MainRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'signup': 'signupPage'
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
		$('body').empty();
		new HomeView();
		new BannerView();
		new SignUpView();
		new FooterView();

	}

});