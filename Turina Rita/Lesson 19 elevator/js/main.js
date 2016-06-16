function goto(level,button){
    //TODO:return a number, how much levels the elevator must go up or down
    
    for (var key in arguments) {
    	if ((typeof(arguments[key]) !== 'string') || (typeof(arguments[key]) !== 'number')) {
    		return 0;
    	}
    }
    var variance = parseInt(button) - level
    if (variance >= -3 && variance <= 3 && variance !== 0) {
    	return variance;
    }
    return 0;
}

function sum() {
    //TODO:return the sum of all arguments given.
    var sum = 0;
    for (var key in arguments) {
    	if (typeof(arguments[key]) == 'number') { // let's assume we sum up only numbers
    		sum = sum + arguments[key];
    } else {
    	return(alert(arguments[key] + " is not a number. Can't make a sum"));
    }
}
return sum;
}
function double(array) {
    //TODO: Return a new array with each value twice as large as the corresponding value in the passed in array.
    var newArr = [];
    var doubleValue = 0;

    for (var key in array) {
    	if (typeof(array[key]) == 'number') {
    		doubleValue = array[key]*2;
    		newArr[key] = doubleValue;
    	} else {
    		return(alert(array[key] + " is not a number. Can't make a sum"));
    	}
    }
    return newArr;
}
function pluck(objs, name) {
    //TODO: Returns an array containing the named property of each object
    var newArr = [];
    var property = 0;
    var i = 0;

    for (var key in objs) {
    	var innerObj = objs[key];
    	for (var innerKey in innerObj) {
    		if (innerKey === name) {
    			newArr[i] = innerObj[innerKey];
    			++i;
    		}
    	}
    }
    return newArr;

};