require(['jquery', 'BugsCollection', 'BugAppView'], function($, BugsCollection, BugAppView){
	console.log(arguments);
	var bugsCollection = new BugsCollection()
	var appView = new BugAppView({ collection : bugsCollection });		
	$(function(){
		appView.render().$el.appendTo(document.body);
	});	
});
