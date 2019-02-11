cat1active = false;
cat2active = false;
cat3active = false;

/*Felix Käfer, [10.02.19 14:20]
const buttons = document.querySelectorAll("li");

Felix Käfer, [10.02.19 14:20]
bzw. var statt const wenn du noches5 schreibst

Felix Käfer, [10.02.19 14:21]
buttons.forEach((element) => {
 if(element.value)...
});
for (var i = 0; i < buttons.length; ++i) {
  //do stuff
} */
window.onload = function() {
    console.log('Dokument geladen');
};


function showCat1(th){
    console.log(th);
    cat1 = document.querySelectorAll("li");
    cat1.forEach(element => {
        if(element.getAttribute('value') != null && element.getAttribute('value') <= th){
            ishidden = element.style.visibility == 'hidden';
            if(ishidden){
                element.style.visibility = "";
            } else {
                element.style.visibility = "hidden";
            }
        }
    });
    
}

function showCat2(){
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    if(cat2active){
        cat2active = false;
        cat2.style.visibility = 'hidden';
    } else {
        cat2active = true;
        cat2.style.visibility = '';
    }
}
function showAllCat(){
    cat1active = true;
    cat2active = true;
    cat1.style.visibility = '';
    cat2.style.visibility = '';
}
function showNoCat(){
    cat1 = document.querySelectorAll("li[value='0,2']")[0];
    cat2 = document.querySelectorAll("li[value='0,3']")[0];
    cat1.style.visibility = 'hidden';
    cat2.style.visibility = 'hidden';
}