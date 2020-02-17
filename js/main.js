var squares = document.getElementsByClassName('square');

function changeBackground (){
    for(i=0; i<squares.length;i++){
        squares[i].style.backgroundColor='red';
    }
    
   //console.log('is this working');
} 
for(i=0; i< squares.length; i++){
    squares[i].addEventListener('mouseover',changeBackground);
    squares[i].addEventListener('mouseout',changeBackground);
}

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
