var screen = document.querySelector('#screen')

function buttonclick(val){
screen.value=screen.value+val;
}

function clearDisplay(){
        screen.value=""
 }



function equalclick() {
    var p= screen.value;
    var q= eval(p);
    screen.value = q;
}