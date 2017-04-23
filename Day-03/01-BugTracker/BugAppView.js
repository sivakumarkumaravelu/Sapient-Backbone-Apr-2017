define(['Backbone', 'jquery', 'BugView', 'Bug', 'text!bug-app-template.html'], function(Backbone, $, BugView, Bug, template){
	var BugAppView = Backbone.View.extend({
		addNewBug : function(newBug){
			var bugView = new BugView({ model : newBug});
			bugView.render().$el.appendTo(this.$('ol'));
			this.$('.stats > span.total').html(this.collection.length);
		},
		updateCount(){
			this.$('.stats > span.total').html(this.collection.length);
			this.$('.stats > span.closed').html(this.collection.closedCount());

		},
		initialize : function(){
			this.listenTo(this.collection, 'add', this.addNewBug);
			this.listenTo(this.collection, 'change', this.updateCount);

		},
		events : {
			'click #btnAddNew' : 'onAddNewClick',
			'click #btnRemoveClosed' : 'onRemoveClosedClick'
		},
		onAddNewClick : function(){
			var bugName = this.$('#txtBugName').val();
			var newBug = new Bug({name : bugName});
			this.collection.add(newBug);
		},
		onRemoveClosedClick : function(){
			this.collection.removeClosed();
		},
		render : function(){
			this.$el.html(template);
			this.$('.stats > span.closed').html(this.collection.closedCount());
			this.$('.stats > span.total').html(this.collection.length);
			return this;
		}
	});
	return BugAppView;
});