define(['Backbone', 'Bug'], function(Backbone, Bug){
	var BugsCollection = Backbone.Collection.extend({
		model : Bug,
		closedCount : function(){
			return this.reduce(function(result, bug){
				return bug.get('isClosed') ? ++result : result;
			}, 0);
		},
		removeClosed : function(){
			console.log(this);
			for(var index = this.length-1; index >= 0; index--){
				var model = this.at(index);
				if (model.get('isClosed'))
					this.remove(model);
			}
		}
	});
	return BugsCollection;
});