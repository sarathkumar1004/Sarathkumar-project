  //enter value on input field//
function enter(inputs) {
    document.getElementById('output').value+=inputs;
}
  
//clear the screen//
function clean() {
    document.getElementById('output').value="";
}

//calculate function//
function calculate() {
    var output=document.getElementById('output').value;
    var result=eval(output);
    document.getElementById('output').value=result;
   document.KeyboardEvent('output').value=result;

}



