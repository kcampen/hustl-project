var FooterView = Parse.View.extend({

	footerTemplate: _.template($('#footer-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.footerTemplate());
	}

});