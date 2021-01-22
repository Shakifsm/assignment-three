//  https://github.com/Shakifsm/assignment-three

// Problem 1 (kilometerToMeter) starts

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(15.5);

// Problem 1 (kilometerToMeter) ends

// Problem 2 (budgetCalculator) starts

function budgetCalculator( watch, mobile, laptop){
    var sum = watch + mobile + laptop;
    return sum;
}
var total = budgetCalculator( 50, 100, 500);
console.log(total);

// Problem 2 (budgetCalculator) ends

// Problem 3 (hotelCost) starts

function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(36);
console.log(result);

// Problem 3 (hotelCost) ends

// Problem 4 (megaFriend) starts

function megaFriend(){
    var max = number[0];
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var number = ["Shakif", "Sazzad", "Rappy", "Tanvir Mahtab Shakif",];
var result = megaFriend();
console.log(result);

// Problem 4 (megaFriend) ends