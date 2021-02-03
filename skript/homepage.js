var kapitel = "";
var main = function () {
    choseMainText();
    activateMainText(mainText);
    changeColumn();
    changeCertainColum('col2', 'wer');
    changeCertainColum('col3', 'das');
    changeCertainColum('col4', 'liestistdoof');
    $(".compare").addClass("comparehidden");

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
        col = this.id;
        val = this.value;
        changeCertainColum(col, val);
    });
}
var changeCertainColum = function(col, val){
    $("." + col).children(".content").addClass("hidden");
    $("." + col).children("." +  val).removeClass("hidden");

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