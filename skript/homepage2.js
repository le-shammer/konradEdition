var kapitel = "";
var main = function () {
    //$("#sidebar").load("sidebar.html");
    //$(".chapterbrand").siblings().hide();
    $(".toggleable").hide();
    $("#hkap1").hide();
    $("#hkap2").hide();
    $("#hkap3").hide();
    $(".zteil").hide();
    $("#hkapA").hide();
    hideChapters();
    activeChapter();
    changecontent();
    nextChapter();
    lastChapter();
    showzusatz();
    alert("Bitte links Kapitel wählen!")
//    checkpw();

}

//check pw
var checkpw = function () {
    var password = prompt("Bitte Passwort eingeben", " ");
    var pass1 = "fusesbrunnen";
    if (password == pass1){
        alert("Korrekt. OK drücken, um fortzufahren");
    }
    else {
        window.location="https://www.uni-wuerzburg.de/startseite/";
    }

}
//Teile aufklappen 
var hideChapters = function () {
    $(".chapterbrand").click(function () {
        if ($(this).hasClass("opened")) {
            $(this).siblings().hide();
            $(this).removeClass("opened");
        } else {
            $(this).addClass("opened");
            $(this).siblings().show();
        }
    });
}

//Einzelnes Kapitel auswählen, entsprechenden Teil markieren falls nötig, kap. speichern, Inhalte neu laden --> leeren
var activeChapter = function () {
    $(".chapter").click(function () {
        kapitel = Number(this.id);
        empy();
        $(".chapter").removeClass("active");
        $(".chapterbrand").removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings(".chapterbrand").addClass("active");
        $("#header").empty()
        if (!($(this).hasClass("zteil"))) {
            $(".zusatzteil").removeClass("active");
        } else if ($(this).hasClass("zteil")) {
            $(".zusatzteil").addClass("active");
        }
        changeHeader(kapitel)
        
        if (!$(this).hasClass("gotcont")) {
            //changeHeader(kapitel);
            alert("In der Vorversion leider noch nicht verfügbar!")
        }
    });
}


//Nächstes Kapitel im footer auswählen
var nextChapter = function () {
    $("#nextchapter").click(function () {
        if (kapitel == 0) {
            $("#header").empty();
            $("#teil1").addClass("opened");
            $("#teil1").addClass("active");
            $("#teil1").siblings().show();
        }
        kapalt = "#" + kapitel.toString();
        $(kapalt).removeClass("active");
        kapitel = Number(kapitel)+1;
        kapneu = "#" + kapitel.toString();
        $(kapneu).addClass("active");
        changeHeader(kapitel);
        empy();
        var path = "content/" + kapitel + "/h.html";
        $("#header").load(path);
        fillonchange(kapneu);
    });
}
var lastChapter = function () {
    $("#lastchapter").click(function () {
        if (kapitel == 2) {
            kapalt = "#" + kapitel.toString();
            $(kapalt).removeClass("active");
            kapitel = Number(kapitel)-1;
            kapneu = "#" + kapitel.toString();
            $(kapneu).addClass("active");
            changeHeader(kapitel);
            empy();
            var path = "content/" + kapitel + "/h.html"
            $("#header").load(path)
        }
        else if (kapitel >= 3){
            kapalt = "#" + kapitel.toString();
            $(kapalt).removeClass("active");
            kapitel = 2;
            kapneu = "#" + kapitel.toString();
            $(kapneu).addClass("active");
            changeHeader(kapitel);
            empy();
            var path = "content/" + kapitel + "/h.html"
            $("#header").load(path)
        }
        
    });
}





var changeHeader = function (kapitel) {
    $("#header").empty();
    var chaptername = "#h" + kapitel.toString();
    var path = "content/" + kapitel.toString() + "/head.html";
    $("#header").load(path);
    var path = "content/" + kapitel.toString() + "/graph.html";
    $("#graph").load(path);
}

//alle cols und den footer mit leer befüllen
var empy = function () {
    //$("select").val("leer");
    //$(".fill").empty();
}


var zoom = function () {
    $('.zoom_01').elevateZoom();
}


function changecontent() {
    $('select').on('change', function () {
        var path = "content/" + kapitel + "/" + this.value + ".html";
        $(this).parent().siblings(".fill").load(path);
    });
}

function fillonchange(kap){
    
     if (!$(kap).hasClass("gotcont")) {
         console.log(kap)
        alert("In der Vorversion leider noch nicht verfügbar!");}
    if ($("#c1").val() == "leer"){
    }
    else {
        var path = "content/" + kapitel + "/" + this.value + ".html";
    }
}


function showzusatz() {
    $(".zusatzteil").click(function () {
        if (!($(this).hasClass("opened"))) {
            var name = ".zt" + this.id;
            $(name).show();
            $(this).addClass("opened");
        } else {
            var name = ".zt" + this.id;
            $(name).hide();
            $(this).removeClass("opened");
        }
    });
}

$(document).ready(main);