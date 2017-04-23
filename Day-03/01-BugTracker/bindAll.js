var obj = {
	name : 'Pen',
    delete : function(){
		 console.log(this.name + ' is deleted');
    },
	change : function(){
		console.log(this.name + ' is changed');
	}
}

function bindAll(context){
    var methodNames = Array.prototype.slice.call(arguments, 1);
    for(var index = 0; index < methodNames.length; index++){
		var methodName = methodNames[index];
		context[methodName] = context[methodName].bind(context);
    }
}

bindAll(obj, 'change', 'delete')

var someone = obj.change

someone()