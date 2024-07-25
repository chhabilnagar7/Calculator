let input = document.getElementById('inputbox');
// using document.querySelectorAll to get all the button instead of using assigning class name
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); // this going to create an array of all buttons

arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);  // eval use to evaluate the mathematical operations on string which is a in-built function in javascript
            input.value = string;

        }
        else if(e.target.innerHTML =='AC'){
            //  clear the input box empty stirng 
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            // this delete the last digit from the input box so we'r using substring of string and adding 0 to str.length -1 means it'll exclude the last digit of a string
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        // if there's any other input value pressed then it'll going to store in the strin which target to the input box-- like adding nos. 
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})