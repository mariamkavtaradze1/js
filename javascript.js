 //davaleba1

function number(){
    var number1=prompt("ჩაწერეთ რიცხვი")
    if(!number1){
    alert("გთხოვთ შეიყვანოთ რიცხვი")
    }else {
    if (number1 % 2 == 0){
    alert("ეს რიცხვი ლუწია")
    } else {
        alert("ეს რიცხვი კენტია")
    }
}
}


//davaleba2

function isValidNumber(x){
    if (!isNaN (x)){
        alert( x +  " " + "is a valid number")
    }else {
        alert(x + " " + "is not a number")
    }
}






//davaleba3

function getType(x){
 if (x=="text"){
    alert(x + " " + "this is a string")
     }else{
    if (x==24) {
     alert(x + " " + "this is a number")
     }else {
         if (x == "true") {
         alert(x + " " + "this is a boolean")
        }
     }

    }
}


//davaleba4
function largest(a, b){
 
    if ((a<b)){
        alert("45 არის უდიდესი" , a, b)
    }else {
    if(a==a) {
        alert("21 ტოლია 21", a, b)
    }
    }
}

//if ((a=21) && (b=45) && (a<b)){
   // alert("45 არის უდიდესი")
//}
//if ((a=21) && (b=45) && (a<b)){
   // alert("45 არის უდიდესი")
//}
//if ((a=21) && (a=21) && (a==a)){
   // alert("21 ტოლია 21")
//}



