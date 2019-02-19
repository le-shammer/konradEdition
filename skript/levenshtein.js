var activeCats = {
    1 : [0, true],
    2 : [0.05, true],
    3 : [0.18, true],
    '4a' : [0.5, true],
    '4b' : [0.8, true],
    '4c' : [0.9, true],
    5 : ['zusatz', true],
    6 : ['alle', false]
};

window.onload = function() {
    console.log('Dokument geladen');
};

function showCat1(inp){
    var th = activeCats[inp][0];
   console.log(th);
   cat1 = document.querySelectorAll("li");
   isHidden = activeCats[inp][1];
   var newVisibility = getNewVisibility(isHidden);
   cat1.forEach(element => {
       if(element.getAttribute('value') != null && element.getAttribute('value') >= th){
           element.style.visibility = newVisibility;
       }
   });
    activeCats[inp][1] = !activeCats[inp][1];
}

function showCat2(inp){
    console.log(inp);
    var th = activeCats[inp][0];
   console.log(th);
   cat1 = document.querySelectorAll("li");
   cat1.forEach(element => {
       if(element.getAttribute('value') != null){
        element.style.visibility = 'hidden';
        if(element.getAttribute('value') >= th){
            element.style.visibility = '';
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