let hoverPinCanada = $(".PinCanada.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinEstadosUnidos = $(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinBrasil = $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinJapon = $(".PinJapon.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinAustralia = $(".PinAustralia.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinChina = $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinEspaña = $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinInglaterra = $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade");
let hoverPinArgentina = $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade");

$(".PinCanada.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinCanada.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoCanada img").css("opacity", "100%")
    $(".TextoCanada").css("opacity", "100%")
    $(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
})

$(".PinCanada.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinCanada.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoCanada img").css("opacity", "0")
    $(".TextoCanada").css("opacity", "0")
    $(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
})


$(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoEstadosUnidos img").css("opacity", "100%")
    $(".TextoEstadosUnidos").css("opacity", "100%")
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
   
})

$(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinEstadosUnidos.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoEstadosUnidos img").css("opacity", "0")
    $(".TextoEstadosUnidos").css("opacity", "0")
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
  
})


$(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoBrasil img").css("opacity", "100%")
    $(".TextoBrasil").css("opacity", "100%")
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
   
})

$(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinBrasil.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoBrasil img").css("opacity", "0")
    $(".TextoBrasil").css("opacity", "0")
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
  
})

$(".PinJapon.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinJapon.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoJapon img").css("opacity", "100%")
    $(".TextoJapon").css("opacity", "100%")
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
})

$(".PinJapon.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinJapon.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoJapon img").css("opacity", "0")
    $(".TextoJapon").css("opacity", "0")
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
})

$(".PinAustralia.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinAustralia.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoAustralia img").css("opacity", "100%")
    $(".TextoAustralia").css("opacity", "100%")
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
})

$(".PinAustralia.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinAustralia.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoAustralia img").css("opacity", "0")
    $(".TextoAustralia").css("opacity", "0")
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
})

$(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoChina img").css("opacity", "100%")
    $(".TextoChina").css("opacity", "100%")
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","0")
})

$(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinChina.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoChina img").css("opacity", "0")
    $(".TextoChina").css("opacity", "0")
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("opacity","100%")
})

$(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoEspana img").css("opacity", "100%")
    $(".TextoEspana").css("opacity", "100%")
})

$(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinEspana.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoEspana img").css("opacity", "0")
    $(".TextoEspana").css("opacity", "0")
})

$(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoInglaterra img").css("opacity", "100%")
    $(".TextoInglaterra").css("opacity", "100%")
   
})

$(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinInglaterra.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoInglaterra img").css("opacity", "0")
    $(".TextoInglaterra").css("opacity", "0")
   
})

$(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").mouseenter(function(){
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".FotoArgentina img").css("opacity", "100%")
    $(".TextoArgentina").css("opacity", "100%")
})

$(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").mouseleave(function(){
    $(".PinArgentina.fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".FotoArgentina img").css("opacity", "0")
    $(".TextoArgentina").css("opacity", "0")
})