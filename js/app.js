function askName() {
    var userName = prompt('What is your name?');

    return document.write('<h3> Hello ' + userName + '</h3>')

}



function getPet() {
    var response = prompt('Would you like a pet dragon or a pet lion');
    var pet;

    while (response !== 'dragon' && response !== 'lion') {
        response = prompt('PLEASE ANSWER EXACTLY!  Would you like a dragon or a lion?');
    }
    if (response === 'dragon') {
        pet = '<img src="images/babydragon.jpg" width="100">';
    } else if (response === 'lion') {
        pet = '<img src="images/babylion.png" width ="100">';
        
    }

    return pet;
}

function getCount() {

    var count = prompt('Great, how many would you like?');

    while (isNaN(count) || count === '') {
        count = prompt('PLEASE ENTER A NUMBER, how many pets would you like?');
    }

    return count;

}

function showPet() {
    var result = '';
    var itemType = getPet();

    var total = getCount();

    for (var i = 0; i < total; i++) {
        result = result + '<p>' + itemType + '</p>'
    }

    return document.write(result);
}

function offerGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}
