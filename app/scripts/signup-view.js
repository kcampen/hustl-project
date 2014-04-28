var SignUpView = Backbone.View.extend({

	createTemplate: _.template($('#sign-up-template').text()),

	initialize: function(){
			$('.jumbotron').html(this.el);

			this.render();
		},

	render: function(){

			var renderTemplate = this.createTemplate(this.model.attributes);
			console.log(this.model);
			this.$el.html(renderedTemplate);
		}


});