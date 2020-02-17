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
