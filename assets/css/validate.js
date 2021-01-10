var pElement = document.querySelectorAll('.content-question-separate p');
if(pElement) {
    for(var i = 0; i < pElement.length; i++) {
        pElement[i].onclick = function(e) {
            e.target.parentElement.querySelector('.content-question-footer').classList.toggle("content-question-appear");       
            e.target.classList.toggle("content-question-separate-header");
            e.target.querySelector("i").classList.toggle("content-question-icon");
            e.target.parentElement.classList.toggle("content-question-separate-margin");
        }
    }
}
function chkbox(obj) {
    if(document.getElementById(obj.id).checked == true) {
        document.getElementById('id1').checked = false;
        document.getElementById('id2').checked = false;
        document.getElementById('id3').checked = false;
        document.getElementById('id4').checked = false;
        document.getElementById(obj.id).checked = true;
     }
}
function resetchkbox() {
    var resetElement = document.querySelector('.dropdown-filter-reset');
    var checkElement = document.querySelectorAll('.btn-filter-check');
    for(var i = 0; i < checkElement.length; i++) {
        if(checkElement[i].checked == true) {
            resetElement.setAttribute("style", "display: block;");
            break;
        }
        resetElement.setAttribute("style", "display: none;");
    }
}

function truechkbox(obj) {
    if(document.getElementById(obj.id).checked) {
        document.querySelector('.app > div:last-child').classList.add('app-fixed');
    }
    else {
        document.querySelector('.app > div:last-child').classList.remove('app-fixed');
    }
}
function increaseAmount(obj) {
    var amountElement = obj.parentElement.children[1];
    obj.onclick = function() {
        amountElement.textContent = parseInt(amountElement.textContent) + 1;
    }
}
function decreaseAmount(obj) {
    var amountElement = obj.parentElement.children[1];
    obj.onclick = function() {
        if(amountElement.textContent == '1') {
            return;
        }
        amountElement.textContent = parseInt(amountElement.textContent) -1;
    }
}