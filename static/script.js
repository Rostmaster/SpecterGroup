var panelUp = false;

$(document).ready(function(){

    $("h1").dblclick(function(){
        $(this).css("background-color", "yellow");
    });
    $("h1").click(function(){
        $(this).css("background-color", "white");
    });

    // $("p").mouseenter(function(){
    //     alert("Mouse Left paragraph");
    // })

    // $("p").mouseleave(function(){
    //     alert("Mouse Left paragraph");
    // })

    // $("li").hover(function(){
    //     alert(`Mouse hover over ${$(this).html()}`);
    // });

    $("input").on({
        mouseenter: function(){
            $(this).css("background-color","lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color","lightblue")
        },
        click: function(){
            $(this).css("background-color","yellow")
        }
    })
    $("input").keydown(function(event){
        var key = (event.keyCode ? event.keyCode : event.which);
        if(key == 13 ){
            alert("Enter");
        }
        else{
            // alert(`you typed : ${key}`)
        }
    })

    $("input").blur(function(){
        $(this).css("background-color",'#FF00FF')
    });
    $("#hide").click(function(){
        $("h1").hide();
        $("p").hide();
        $("u").hide();
    });
    $("#show").click(function(){
        $("h1").show();
        $("p").show();
        $("u").show();
    });
    $("#fadeOut").click(function(){
        $("h1").fadeOut();
        $("p").fadeOut();
        $("u").fadeOut();
    });
    $("#fadeIn").click(function(){
        $("h1").fadeIn("fast");
        $("p").fadeIn("slow");
        $("u").fadeIn(3000);
    });
    // $("#flip").on('click',function(){
    //     if(!panelUp){
    //         $("#panel").slideDown(3000);
    //         panelUp=true;
    //     }else{
    //         $("#panel").slideUp(3000);
    //         panelUp=false;
    //     }
    
    // });
    // $("#hidiv").click(function(){
    //     if(!panelUp){
    //         $("#panel").slideDown(3000);
    //         panelUp=true;
    //     }else{
    //         $("#panel").slideUp(3000);
    //         panelUp=false;
    //     }
     
    // });
    $("#flip").click(function(){
        $("#panel").slideToggle();
    });
    $("#MoveRight").click(function(){
        $("h1").animate({"margin-left":'400px'},1000);
    });
    $("#MoveLeft").click(function(){
        $("h1").animate({"margin-left":'0px'},5000);
    });
    $("#stop").click(function(){
        $('#panel').stop();
    });

    //Css add remote
    $("#css-class").on("click",function(){
        $("p:first").addClass("red-font");
    });
    $("#css-class-del").on("click",function(){
        $("p:first").removeClass("red-font");
    });

    var selector_ = -1
    var options = ['parents', 'parent', "children", "find"]

    $("#prettify").click(function () {
        selector_ += 1
        $("h1").html(selector_)
        $("#child").parentsUntil("body").css({ "color": "black", "border": "2px solid lightgrey" });

        if (options[selector_] == "parents") {
            $("#child").parentsUntil("body").css({ "color": "red", "border": "2px solid red" });
            $("#parent").children().css({ "color": "black", "border": "2px solid lightgrey" });
        } else if (options[selector_] == "parent") {
            $("#child").parent().css({ "color": "red", "border": "2px solid red" });
        } else if (options[selector_] == "children") {
            $("#parent").children().css({ "color": "red", "border": "2px solid red" });
        } else if (options[selector_] == "find") {
            $("#parent").find("#sibling").css({ "color": "green", "border": "2px solid green" });
            $("#parent").find("#child").css({ "color": "blue", "border": "2px solid blue" });
        }
        else {
            $("#child").parentsUntil("body").css({ "color": "black", "border": "2px solid lightgrey" });
            $("#parent").children().css({ "color": "black", "border": "2px solid lightgrey" });
            selector_ = -1
        }
    });

    $(function(){
        $('.lazy').Lazy();
    });

    $.fn.colorize = function(color){
        this.css("color",color)
    };

    $("#colorize").on("click",function(){
        $("h1").colorize("green");
    })

    $("#post").on("click", function () {
        $.ajax({
            url: "http://127.0.0.1:5555/home?",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: { "FirstName": $("#FirstName").val(), LastName: $("#Lastname").val() },
            dataType: "text"
        })
            .done(function (data) {
                alert("Data received: " + data);
            });
    });

    $("#put").on("click", function () {
        $.ajax({
            url: 'http://127.0.0.1:5555/home?',
            type: 'PUT',
            data: JSON.stringify({ "FirstName": "Bibi", "LastName": "Netaniyahu" }),
            success: function (data) {
                alert('Update was performed.' + data);
            }
        });
    });

    $("#json").click(function () {


        $.getJSON( "http://127.0.0.1:5555/json", function() {
            console.log( "success" );
          })
            .done(function(data) {
              $("#json-cont").val(JSON.stringify(JSON.parse(data), undefined, 4));
            })
            .fail(function() {
              console.log( "error" );
            })
            .always(function() {
              console.log( "complete" );
            });
    });
});