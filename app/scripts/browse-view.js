var BrowseView = Parse.View.extend({

	browseTemplate: _.template($('#browse-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.browseTemplate());
	}

});