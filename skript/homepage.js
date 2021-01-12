var kapitel = "";
var main = function () {
    choseMainText();
    activateMainText(mainText);
    changeColumn();
    //checkpw();

}

var mainText = "hsb"
var choseMainText = function(){
    $("#lesetext").on('change', function () {
        mainText = this.value;
        activateMainText(mainText)
    });
}
activateMainText = function(val){
    $(".col1").children(".content").addClass("hidden");
    $(".col1").children("." + val).removeClass("hidden");
}

var changeColumn = function(){
    $(".select").on('change', function(){
        //console.log(this.id + this.value);
        $("." + this.id).children(".content").addClass("hidden");
        $("." + this.id).children("." +  this.value).removeClass("hidden");
    });
}

//check pw
var checkpw = function () {
    var password = prompt("Bitte Passwort eingeben", "");
    var pass1 = "kindheit.jesu";
    if (password != pass1){
        window.location="https://www.uni-wuerzburg.de/startseite/";
    }

}

$(document).ready(main);