var BannerView = Parse.View.extend({

	bannerTemplate: _.template($('#banner-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.bannerTemplate());
	}

});