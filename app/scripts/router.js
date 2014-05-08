var MainRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'signup': 'signupPage',
		'signup/form': 'formPage',
		'signup/new': 'formDone'
	},

	initialize: function(){
		console.log('hello');
	},

	home: function(){
		console.log('homeview');
		new HomeView();
		new BannerView();
		new BrowseView();
		new FooterView();

	},

	signupPage: function(){
		$('body').empty();
		new HomeView();
		new BannerView();
		new SignUpView();
		new FooterView();

	},

	formPage: function(){
		$('body').empty();
		new HomeView();
		new BannerView();
		new FormView();
		new FooterView();
	},

	formDone: function(){
		console.log('umm?');
		new HomeView();
		new BannerView();
		new BrowseView();
		new FooterView();
	}

});