function myClickFunction() {
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = "Goodbye";

}


function myClickFunction1() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = "Hi";

}



function myLoadFunction() {

var element = document.getElementById('heading');
element.addEventListener('click', myClickFunction);


}

function myLoadFunction1() {

    var element = document.getElementById('paragraph');
    element.addEventListener('click', myClickFunction1);
    
    
    }


document.addEventListener('DOMContentLoaded', myLoadFunction, myLoadFunction1);