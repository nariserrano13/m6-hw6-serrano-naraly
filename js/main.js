var squares = document.getElementsByClassName('square');

//use for loop to apply js to each squares element
//use i< squares.length to ensure that eventlistener is applying to each sqaure within the squares array length
function changeBackground (){
    for(i=0; i<squares.length;i++){
        squares[i].style.backgroundColor='#ffa83d';
    }
} 
for(i=0; i< squares.length; i++){
    squares[i].addEventListener('mouseover',changeBackground);
    squares[i].addEventListener('mouseout',changeBackground);
}

/*APPENDED node
initialized var myElement and used createElement to create a <p> tag
initialized squareOneText to have a value of createTextNode and input unique text
associated myElement to squareOneText so the <p> had content to fill 
designated where the node ( p tag) was going to be appended by using document.getElementsByClassName('subheading')[0]
eventlistener onclick is in the html and will run the function squareOne() 
*/
function squareOne (){
    var myElement = document.createElement('p');
    var squareOneText = document.createTextNode('Ooch - so close but no cigar');
    
    myElement.appendChild(squareOneText);

    document.getElementsByClassName('subheading')[0].appendChild(myElement);
}
function squareTwo(){
    var myElement = document.createElement('p');
    var squareTwoText = document.createTextNode('DING DING DING - We have a winner');

    myElement.appendChild(squareTwoText);
    document.getElementsByClassName('subheading')[0].appendChild(myElement);
}
function squareThree(){
    var myElement = document.createElement('p');
    var squareThreeText = document.createTextNode('Oops better luck next time');

    myElement.appendChild(squareThreeText);
    document.getElementsByClassName('subheading')[0].appendChild(myElement);
}

//REMOVED A CLASS (class ='show') TO AN ELEMENT ON 'click'
var startOver = document.getElementsByClassName('button')[0];

function showButton(){
    startOver.classList.remove('button');
}

for (i=0; i<squares.length; i++){
    squares[i].addEventListener('click', showButton);
}

/*
//ADDED A CLASS (class ='show') TO AN ELEMENT ON 'click'

var startOver = document.getElementsByClassName('button')[0];

function showButton(){
    startOver.classList.add('show');
}

//the for loop allows me to run the eventListener on each element with the squares 
//class. Set squares variable at top of code on line 1
for (i=0; i<squares.length; i++){
    squares[i].addEventListener('click', showButton);
}
*/