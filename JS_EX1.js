function myClickFunction() {
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = "Goodbye";

}


function myClickFunction1() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = "Hi";

}


function myLoadFunction() {

var element = document.getElementById('paragraph');
element.addEventListener('click', myClickFunction);


}

function changeBackground(color) {
    document.body.style.background = color;
}

// the function above changes the backround colour.

document.addEventListener('DOMContentLoaded', myLoadFunction);