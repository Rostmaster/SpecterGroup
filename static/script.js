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



});