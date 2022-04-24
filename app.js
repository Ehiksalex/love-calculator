

function lovePercentage(){
    var name = prompt("Enter your name: ");
    var Pname = prompt("Enter your partner name:");

    var bothName = Math.random() * 100;
    bothName = Math.floor(bothName) + 1;

    alert(name +" and " + Pname + " are " + bothName + "% match!!");
}
lovePercentage();


// using the if function


// var name = prompt("Enter your name: ");
// var Pname = prompt("Enter your partner name:");

// function lovePercentage(){
//     var bothName = Math.random() * 100;
//     bothName = Math.floor(bothName) + 1;

//     if (bothName > 80){
//         alert("Your lovescore is  " + bothName + "% and it's pretty high");
//     }
//     else if(bothName > 50 && bothName<= 80){
//         alert("Your lovescore is  " + bothName + "% and just perfect");
//     }
//     else{
//         alert("Your lovescore is  " + bothName + "%. whoops! that's poor");
//     }
    
// }
// lovePercentage();