
// console.log("elpepe");

let hovericon = $("i.fa-solid.fa-location-pin.fa-beat-fade");

$("i.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $("i.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoCanada img").css("opacity", "100%")
})

$("i.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $("i.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoCanada img").css("opacity", "0")
})