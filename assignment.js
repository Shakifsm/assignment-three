//  https://github.com/Shakifsm/assignment-three

// Problem 1 (kilometerToMeter) starts

function kilometerToMeter(kilometer){
    if(kilometer > -1 ){
        var meter = kilometer * 1000;
        return meter;
    }
    else{
        return "Please provide a valid number!"
    }
}

// Problem 1 (kilometerToMeter) ends

// Problem 2 (budgetCalculator) starts

function budgetCalculator( watch, mobile, laptop){
    var sum = watch + mobile + laptop;
    return sum;
}
var watch = 50;
var mobile = 100;
var laptop = 500;

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
// Problem 3 (hotelCost) ends

// Problem 4 (megaFriend) starts

function megaFriend(userName){
    var max = userName[0];
    for( var i = 0; i < userName.length; i++ ){
        var element = userName[i];
        if(element.length > max.length){
            max = element;
        }
    }
    return max;
}

// Problem 4 (megaFriend) ends