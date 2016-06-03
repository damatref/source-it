(function(){
    //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
	//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
    // return list;
    function recursiveList (data) {
        var ul = document.createElement("ul"); //creating the top element of the list
        tree = CreateTree(ul,data); //calling the function to create the tree

        function CreateTree(newul, elem) {

            //check if the element of array is an inner array
            for (var i = 0; i < elem.length; i++) {
                var newli = document.createElement("li");

                //if an element ISN'T an inner array - adding the element and the data
                if (!Array.isArray(elem[i])){
                    var text = document.createTextNode(elem[i]);
                    newli.appendChild(text);
                } else { //if an element IS an inner array - creating an inner list and calling the function to add inner elements
                    var innerul = document.createElement("ul");
                    newli.appendChild(CreateTree(innerul,elem[i]));
                }
                newul.appendChild(newli);//adding "li" to parent "ul"
            }
            return newul;// return the list
        }

        //displaying the tree
        var list = document.getElementById("list");
        list.appendChild(tree);
    }


	//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
	//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
    var fragment = document.createDocumentFragment();
    function recursiveHeadings(data, weight) {

        for (var i = 0; i < data.length; i++) {
            //check if the element of array is an inner array
            if (!Array.isArray(data[i])){
                //if an element ISN'T an inner array - adding the element and the data
                var heading = document.createElement("h"+weight);
                var text = document.createTextNode(data[i]);
                heading.appendChild(text);
                fragment.appendChild(heading);
            } else { //if an element IS an inner array - calling the function with new header parameter
                recursiveHeadings(data[i],weight+1);
            }
        }
        // displaying the fragment with added headings on the page
        var headings = document.getElementById("headings");
        headings.appendChild(fragment);
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
        var form = document.getElementById("form");
        var submit = form.getElementsByTagName("button")[0];
        // console.log(submit);
        submit.addEventListener("click", test);


        function test(){
            var firstName = document.getElementById("first-name"); // get first name field by id
            var lastName = document.getElementById("last-name"); // get last name field by id
            // check if fields are empty;
            if (firstName.value == null || firstName.value == "") {
                firstName.style.borderColor = "red";
                alert("Name must be filled out");

            } else if (lastName.value == null || lastName.value == "") {
                alert("Last Name must be filled out");
                lastName.style.borderColor = "red";
            } else {
                alert("The form is sent successfully!");
            }
        }
    }

	//вызывать функции здесь!
    var x = [1,2,[3,4,[6,7,8],9],10,11];
    recursiveList(x);
    recursiveHeadings (x, 1);
    simpleValidation(form);
})();