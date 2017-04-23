define(['Backbone', 'jquery', 'text!bug-item-template.html'], function(Backbone, $, template){
	var BugView = Backbone.View.extend({
		render : function(){
			this.$el.html(template);
			this.$('span.bugname').html(this.model.get('name'));
			if (this.model.get('isClosed')){
				this.$('span.bugname').addClass('closed');
			} else {
				this.$('span.bugname').removeClass('closed');
			}
			return this;
		},
		initialize : function(){
			/*_.bindAll(this, 'render', 'remove');
			this.model.on('change', this.render);
			this.model.on('remove', this.remove);*/

			this.listenTo( this.model, 'change', this.render);
			this.listenTo( this.model, 'remove', this.remove);
		},
		remove : function(){
			this.$el.remove();
		},
		events : {
			'click .bugname' : 'toggleBug'
		},
		toggleBug : function(){
			this.model.toggle();
		}
	});
	return BugView;
});