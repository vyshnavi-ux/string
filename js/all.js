// reverse a string 

// method1 starts
    // for this we need to follow 3 steps 
    // 1)convert string to array by using split()
    // 2)reverse the above point 
    // 3)join the above point 
var FullName = "bachu";
var FullNameSplit = FullName.split("");
var FullNameReverse = FullNameSplit.reverse();
var FullNameJoin = FullNameReverse.join("");

// Note : 
// we need to split and join with empty string 
console.log("String reverse",FullNameJoin);
// method1 ends

//method2 we can do while using simple function

function reverseString(stringData){
    var FullName = stringData;
    var FullNameSplit = FullName.split("");
    var FullNameReverse = FullNameSplit.reverse();
    var FullNameJoin = FullNameReverse.join("");
    console.log(FullNameJoin);
}
reverseString("brahmaiah");

//method2 ends

// method3 for loop 
function reverseStrForLoop(strFor) {
    var strNew = "";
    for (var i = strFor.length - 1; i >= 0; i--) {
        strNew += strFor[i]
    }
    console.log(strNew);
    return strNew;
}
reverseStrForLoop("vyshu");
// method3 ends 