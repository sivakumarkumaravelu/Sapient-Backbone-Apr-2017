define(['Backbone'], function(Backbone){
	var Bug = Backbone.Model.extend({
		defaults : {
			name : '',
			isClosed : false
		},
		toggle : function(){
			this.set('isClosed', !this.get('isClosed'));
		}
	});
	return Bug;
});