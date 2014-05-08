var FormView = Parse.View.extend({

	formTemplate: _.template($('#form-template').text()),

	initialize: function(){
		$('body').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.formTemplate());
	}

});