const firstDiv = document.querySelector('.first');


/* const btncat1 = document.getElementsByClassName('button01')[0]; 
const btncat2 = document.getElementsByClassName('button02')[0]; 
const cat1 = document.querySelectorAll("li[value='0,2']")
const cat2 = document.querySelectorAll("li[value='0,3']") */
window.onload = function() {
    console.log('Dokument geladen');
    showNoCat();
};


function showCat1(){
    cat1 = document.querySelectorAll("li[value='0,2']")[0];
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    cat1.style.visibility = 'hidden';
    cat2.style.visibility = '';
}

function showCat2(){
    cat1 = document.querySelectorAll("li[value='0,2']")[0];
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    cat1.style.visibility = '';
    cat2.style.visibility = 'hidden';
}
function showAllCat(){
    cat1 = document.querySelectorAll("li[value='0,2']")[0];
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    cat1.style.visibility = '';
    cat2.style.visibility = '';
}
function showNoCat(){
    cat1 = document.querySelectorAll("li[value='0,2']")[0];
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    cat1.style.visibility = 'hidden';
    cat2.style.visibility = 'hidden';
}