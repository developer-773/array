var elForm = document.querySelector(".from-input");
var elInput = elForm.querySelector(".input");
var elOutput = elForm.querySelector(".output");
var elBtn = elForm.querySelector(".success");
var area = elForm.querySelector(".area");
var pii = document.querySelector(".pi");

// elForm.addEventListener("submit", function(evt) {
//     // evt.preventDefault();
//     // var elInputValue = elInput.value.trim();
//     // // var elOutputValue = elOutput.value.trim();
//     // var elArea = area.value.trim();
//     // console.log(elArea.indexOf(elInputValue));//text indeksini qaytaradi
// });



//masala 2 textareadigi indeksini qaytaradi
//masala 3 textareadigi indeksi bo'sa true yoki false
//masala 4 ikkita inputga kiritilgan ikkita text orasidigi so'zlani chiqariberish. 



// array task - 1
//Kiritilgan sondigi fruit chiqarish

var arr = ["Olma", "Uzum", "Shaftoli", "Gilos", "Banan"]

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elInputValue = elInput.value.trim();
    var elInputValueNum = Number(elInputValue);
    pii.textContent = arr[elInputValueNum-1];
    
});

//array task - 2
//Input - 1 boshiga item qo'shish, Input - 2 oxiriga item qo'shish. Buttonla bilan boshidan va oxiridan item o'chirish

var elFormm = document.querySelector(".second-form");
var elStart = elFormm.querySelector(".start");
var elEnd = elFormm.querySelector(".end");
var go = elFormm.querySelector(".go");
var deleteStart = elFormm.querySelector(".deleteStart");
var deleteEnd = elFormm.querySelector(".deleteEnd");
var pi = document.querySelector(".p");


var ar = [];
elFormm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var start = elStart.value.trim();
    var end = elEnd.value.trim();
    if (start != 0) {
        ar.unshift(start);
        pi.textContent = ar;
    }if (end != 0) {
        ar.push(end);
        pi.textContent = ar;
    }
    console.log(ar);
});

deleteStart.addEventListener('click', function(elS) {
    elS.preventDefault();
    var deleteStartItem = elStart.value.trim();
    var startIt= ar.shift(deleteStartItem);
    pi.textContent= ar;
});

deleteEnd.addEventListener('click', function(elE) {
    elE.preventDefault();
    var deleteEndItem = elEnd.value.trim();
    var endIt= ar.pop(deleteEndItem);
    pi.textContent = ar;
    
});  


//array task - 3
//Kiritilgan sonni natijasi kereli joyga yozilishi.
//FizzBuzz

var elFrom = document.querySelector(".third-form");
var elFizzInput = elFrom.querySelector(".fizbuzInput");
var elFizzN = elFrom.querySelector(".fizN");
var elBuzzN = elFrom.querySelector(".buzz");
var elFBN = elFrom.querySelector(".fizbuzN");
var elFizzResult = elFrom.querySelector(".fizResult");
var elBuzzResult = elFrom.querySelector(".buzResult");
var elFBResult = elFrom.querySelector(".fizbuzResult");

var arrF = [];
var arrB = [];
var arrFB = [];

elFrom.addEventListener('submit', function (et) {
    et.preventDefault();
    
    var elFizzInputValue = Number(elFizzInput.value.trim());
    
    if (elFizzInputValue % 3 == 0 && elFizzInputValue % 5 == 0) {
        arrFB.push(elFizzInputValue);
        elFBResult.textContent = arrFB;
        elFBN.textContent = arrFB.length;
        arrFB.join('');

    
    }else if (elFizzInputValue % 3 == 0) {
        arrF.push(elFizzInputValue);
        elFizzResult.textContent = arrF;
        elFizzN.textContent = arrF.length;

    }else if(elFizzInputValue % 5 == 0 ) { 
        arrB.push(elFizzInputValue);
        elBuzzResult.textContent = arrB;
        elBuzzN.textContent = arrB.length;
    }else {
        alert(`Bu ${elFizzInputValue} son 3 ga ham 5 ga ham bo'linmaydi.`)
    }
        
});



