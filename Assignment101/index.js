var outputvar = document.getElementById("output");
console.log(outputvar);
var paragraph = document.getElementById("para");
let a;

function changeText(event) {
    outputvar.innerText = document.getElementById("input").value;  
    a = document.getElementById("input").value;
   
    if (event.which == "13") {
        paragraph.innerText = "Nice Name ❤️😁" + a;
        document.title = "Assignment Done✅";
    }
   
    if (a == "") {
        paragraph.innerText = "Enter your name again";
    }

}

function windowSwitched() {
    document.title = "Please come back";
}

function tabActive() {
    document.title = "Assignment101";
}

document.addEventListener('contextmenu', event => event.preventDefault());




