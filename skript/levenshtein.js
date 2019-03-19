//Erstes Element in Liste gibt Levenshtein-Grenzwert an; zweiter Wert kann für "Toggle" Option genutzt werden
var activeCats = {
    1 : [0, true],
    2 : [0.05, true],
    3 : [0.18, true],
    '4a' : [0.5, true],
    '4b' : [0.8, true],
    '4c' : [0.9, true],
    5 : ['zusatz', true],
    6 : [1, false]
};

window.onload = function() {
    console.log('Dokument geladen');
    resetSelects();
    addToolTip();
};

function addToolTip(){
    const reference = document.querySelector('.infobox');
    new Tooltip(reference, {
        placement: 'bottom', // or bottom, left, right, and variations
        title: "Wie funktionieren die Distanzen?"
    }); 


}

function resetSelects(){
    selectlist = document.querySelectorAll("select");
    selectlist.forEach(element => {
        element.selectedIndex = "0";
    });
}

function hideOnLoad(){
    showCat(6);
}

function showCat(inp){
    console.log(inp);
    var th = activeCats[inp][0];
   console.log(th);
   cat1 = document.querySelectorAll("li");
   cat1.forEach(element => {
       if(element.getAttribute('value') != null){
           element.classList.add('comparehidden');
        if(element.getAttribute('value') >= th){
            element.classList.remove('comparehidden');
        }
    }
   });
    activeCats[inp][1] = !activeCats[inp][1];
}
function showAll(){
    isHidden = activeCats[6][0];
    for(category in activeCats){
        activeCats[category][1] = !isHidden
    }
    liArray = document.querySelectorAll("li[value]");
    var newVisibility = getNewVisibility(isHidden);
    hideElements(liArray, newVisibility);
    activeCats[6][0] = !activeCats[6][0];
}

function getNewVisibility(isHidden){
    if(isHidden){
        return '';
    } else {
        return 'hidden';
    }
}

function hideElements(liArray, newVisibility){
    liArray.forEach(element => {
        element.style.visibility = newVisibility;
    })
}




