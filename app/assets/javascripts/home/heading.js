// <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

// $("#top-left").mouseenter(function(){
//     $("#snap-background").removeClass("visible");
//     $("#bill-background").removeClass("visible");
//     $("#unknown-background").removeClass("visible");
//     $("#extinguish-background").addClass("visible");
// });

$("#top-left").mouseenter(function(){
    $("#snap-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $("#extinguish-background").addClass("visible");
});

$("#top-right").mouseenter(function(){
    $("#extinguish-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $("#snap-background").addClass("visible");
});

$("#bottom-left").mouseenter(function(){
    $("#snap-background").removeClass("visible");
    $("#extinguish-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $("#bill-background").addClass("visible");
});

$("#bottom-right").mouseenter(function(){
    $("#snap-background").removeClass("visible");
    $("#extinguish-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").addClass("visible");
});

// $("#top-left").click(function(){
//     $("#business-card").css("transform-origin", "right bottom");
//     $("#business-card").addClass("exit-right");
//     setTimeout(function() {
//         $("#extinguish-background.visible").addClass("fullscreen")
//     }, 1000);
// });

// $("#extinguish-background").click(function(){
//     $("#extinguish-background.visible").removeClass("fullscreen")
//     setTimeout(function() {
//         $("#business-card").removeClass("exit-right");
//     }, 1000);
// });

// $("#top-right").click(function(){
//     $("#business-card").css("transform-origin", "left bottom");
//     $("#business-card").addClass("exit-left");
//     setTimeout(function() {
//         $("#snap-background.visible").addClass("fullscreen");
//     }, 1000);
// });

// $("#snap-background").click(function(){
//     $("#snap-background.visible").removeClass("fullscreen");
//     setTimeout(function() {
//         $("#business-card").removeClass("exit-left");
//     }, 1000);
// });

// $("#bottom-left").click(function(){
//     $("#business-card").css("transform-origin", "right top");
//     $("#business-card").addClass("exit-right-up");
//     setTimeout(function() {
//         $("#bill-background.visible").addClass("fullscreen");
//     }, 1000);
// });

// $("#bill-background").click(function(){
//     $("#bill-background.visible").removeClass("fullscreen");
//     setTimeout(function() {
//         $("#business-card").removeClass("exit-right-up");
//     }, 1000);
// });
$("#extinguish-content").on('click', "#extinguish-back", function () {
    // $("#billgroble-content").addClass("shrink");
    $("#extinguish-back").addClass("shrink");
    setTimeout(function() {
        $("#extinguish-background.visible").removeClass("fullscreen");
        setTimeout(function() {
            $("#business-card").removeClass("exit-right");
            $("#extinguish-content").html("");
        }, 1000);
    }, 1000);
});

$("#snap-content").on('click', "#snap-back", function () {
    // $("#billgroble-content").addClass("shrink");
    $("#snap-back").addClass("shrink");
    setTimeout(function() {
        $("#snap-background.visible").removeClass("fullscreen");
        setTimeout(function() {
            $("#business-card").removeClass("exit-left");
            $("#snap-content").html("");
        }, 1000);
    }, 1000);
});

$("#bill-content").on('click', "#billgroble-back", function () {
    // $("#billgroble-content").addClass("shrink");
    $("#billgroble-back").addClass("shrink");
    setTimeout(function() {
        $("#bill-background.visible").removeClass("fullscreen");
        setTimeout(function() {
            $("#business-card").removeClass("exit-right-up");
            $("#bill-content").html("");
        }, 1000);
    }, 1000);
});

$("#unknown-content").on('click', "#coming-soon-back", function () {
    $("#coming-soon").addClass("shrink");
    $("#coming-soon-back").addClass("shrink");
    setTimeout(function() {
        $("#unknown-background.visible").removeClass("fullscreen");
        setTimeout(function() {
            $("#business-card").removeClass("exit-left-up");
            $("#unknown-content").html("");
        }, 1000);
    }, 1000);
});

$("#email").click(function(){
    $("#business-card").css("transform-origin", "initial");
    $("#snap-background").removeClass("visible");
    $("#extinguish-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $(".corner").addClass("to-back");
    $("#business-card").addClass("flipY");
    $("#contact").css("pointer-events", "initial");
    $("#contact").addClass("visible");
    // $("#top-right").addClass("back");
    setTimeout(function() {
        $("#business-card").addClass("expanded");
        $("#shadow").addClass("expanded")
    }, 1000);
    setTimeout(function() {
        $("#contact").css("opacity", "1");
    }, 500);
});

$("#name").click(function(){
    $("#business-card").css("transform-origin", "initial");
    $("#snap-background").removeClass("visible");
    $("#extinguish-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $("#business-card").addClass("flipX");
    $("#bio").addClass("visible");
    $(".corner").addClass("to-back");
    setTimeout(function() {
        $("#business-card").addClass("expanded");
        $("#shadow").addClass("expanded")
    }, 1000);
    setTimeout(function() {
        $("#bio").css("opacity", "1");
    }, 500);
});

$("#title").click(function(){
    $("#business-card").css("transform-origin", "initial");
    $("#snap-background").removeClass("visible");
    $("#extinguish-background").removeClass("visible");
    $("#bill-background").removeClass("visible");
    $("#unknown-background").removeClass("visible");
    $(".corner").addClass("to-back");
    $("#business-card").addClass("flipX");
    $("#experience").addClass("visible");
    $("#experience").css("pointer-events", "initial");
    setTimeout(function() {
        $("#business-card").addClass("expanded");
        $("#shadow").addClass("expanded")
    }, 1000);
        setTimeout(function() {
        $("#experience").css("opacity", "1");
    }, 500);
});

$("#bio").on('click', "#intro-back", function () {
    $("#business-card").removeClass("expanded");
    $("#shadow").removeClass("expanded")
    setTimeout(function() {
        $("#business-card").removeClass("flipX");
        $("#business-card").removeClass("flipX");
        $("#contact").css("pointer-events", "none");
        setTimeout(function() {
            $("#bio").css("opacity", "0");
            $("#bio").removeClass("visible");
        }, 500);
        setTimeout(function() {
            $(".corner").removeClass("to-back");
        }, 1000);
    }, 1000);
});

$("#contact").on('click', "#contact-back", function () {
    $("#business-card").removeClass("expanded");
    $("#shadow").removeClass("expanded")
    setTimeout(function() {
        $("#business-card").removeClass("flipY");
        $("#business-card").removeClass("flipY");
        $("#contact").css("pointer-events", "none");
        setTimeout(function() {
            $("#contact").css("opacity", "0");
            $("#contact").removeClass("visible");
        }, 500);
        setTimeout(function() {
            $(".corner").removeClass("to-back");
        }, 1000);
    }, 1000);
});

$("#experience").on('click', "#experience-back", function () {
    $("#business-card").removeClass("expanded");
    $("#shadow").removeClass("expanded")
    setTimeout(function() {
        $("#business-card").removeClass("flipX");
        $("#business-card").removeClass("flipX");
        $("#experience").css("pointer-events", "none");
        setTimeout(function() {
            $("#experience").css("opacity", "0");
            $("#experience").removeClass("visible");
        }, 500);
        setTimeout(function() {
            $(".corner").removeClass("to-back");
        }, 1000);
    }, 1000);
});

setTimeout(function() {
        $("#shield").css("display", "none");
}, 2500);