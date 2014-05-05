var SignUpView = Parse.View.extend({

	createTemplate: _.template($('#sign-up-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}

});