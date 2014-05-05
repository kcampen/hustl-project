var SignUpView = Parse.View.extend({

	createTemplate: _.template($('#sign-up-template').text()),

	initialize: function(){
		$('.jumbotron').empty();
		$('.jumbotron').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}

});