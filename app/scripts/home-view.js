var HomeView = Parse.View.extend({

homeTemplate: _.template($('#home-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.homeTemplate());
	}

});