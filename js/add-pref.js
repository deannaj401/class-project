var response = prompt('Which do you like best? Dragons, Wizards or Lions?');
var message;

if (response === "dragons") {
    message = "You will love Lord of the Rings";
   } else if (response === "Dragons") {
        message = "You will love Lord of the Rings";

}  else if (response === "wizards") {
    message = "Harry Potter is the book for you";
 } else if (response === "Wizards") {
        message = "Harry Potter is the book for you";
}   else if (response === "lions") {
    message = "I recommend the Narnia books";
}    else if (response === "Lions") {
        message = "I recommend the Narnia books";
}   else {
    message = "Try Goodreads.com for suggestions";

}

document.write ('<h3>' + message + '</h3>')