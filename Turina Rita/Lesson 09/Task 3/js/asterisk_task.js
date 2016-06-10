(function() {
	// 	3*. Написать функцию, которая получает объект, и если клю хранит простое значение - в каждый ключ поставить значение равное его порядковому номеру, 
	// массивы не меняем вообще, а если в значении другой объект - сам объект не заменяем, но внутри него значения так же меняются, но только
	// ставится в начале номер порядковый из первого объекта. К примеру мы идем по объекту, это четвертый ключ, но внутри объект из трех пар ключ-значение,
	// внутри мы получим: 4.1, 4.2, 4.3

	function changeObj(object) {
		var i = 1; //An iterator to find key's index number
		// let's assume, we are starting from 1, not a zero (as in example in the task)
		
		for (var key in object) {
			// if element is an object, but not an array - change each object's element into inner key's index number
			if ((typeof(object[key]) == 'object') && !(Array.isArray(object[key]))){
				var j = 1;
				for (var innerKey in object[key]) {
					object[key][innerKey] = (i + "." + j);
					j = ++j;					
				}
			} else if (Array.isArray(object[key])) {// if element is an array - don't change it
				continue;
			} else {// for primitive types - change object's element into key's index number
				object[key] = i;
			}
			i = ++i;
		}

		// displaying result
		var fragment = document.createDocumentFragment();
		for (var key in object){
			var p = document.createElement("p");
			if ((typeof(object[key]) == 'object') && !(Array.isArray(object[key]))){
				for (var innerKey in object[key]) {
					var text = document.createTextNode(" " + key + " " + object[key][innerKey]);					
					p.appendChild(text)
				}
			} else {
				var text = document.createTextNode(key + " " + object[key]);
				p.appendChild(text)
			}
			fragment.appendChild(p);
		}
		var x = document.getElementById("result");
		x.appendChild(fragment);
	}
	// define the object
	var myObj = {
		a: 2,
		b: 'text',
		c: '42',
		innerObj: {
			ia: 3,
			ib: 4,
			ic: 'test'
		},
		testArr: [1,3,'text']
	};
	// call the function
	changeObj(myObj);
})()