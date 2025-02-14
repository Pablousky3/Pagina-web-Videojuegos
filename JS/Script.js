// Scripts para la web 


// pagina selector personajes

let player1Selected = false;
let player2Selected = false;

function selectCharacter(character) {
    if (!player1Selected) {
        updatePlayerStats('player1', character);
        player1Selected = true;
    } else if (!player2Selected) {
        updatePlayerStats('player2', character);
        player2Selected = true;
    }

    if (player1Selected && player2Selected) {
        document.getElementById('ready-button').disabled = false;
    }
}

function updatePlayerStats(player, character) {
    const playerImg = document.getElementById(`${player}-img`);
    const playerInfo = document.getElementById(`${player}-info`);
    let characterName, characterImage, characterStats;

    switch(character) {
        case 'james':
            characterName = "Blanka";
            characterImage = "images/Personajes/blanka.png";
            characterStats = { Fuerza: 80, Velocidad: 70, Vida: 60 };
            break;
        case 'emily':
            characterName = "Cammy";
            characterImage = "images/Personajes/cammy.png";
            characterStats = { Fuerza: 60, Velocidad: 80, Vida: 70 };
            break;
        case 'william':
            characterName = "Chunli";
            characterImage = "images/Personajes/chunli.png";
            characterStats = { Fuerza: 90, Velocidad: 60, Vida: 50 };
            break;
        case 'olivia':
            characterName = "Dhalsim";
            characterImage = "images/Personajes/dhalsim.png";
            characterStats = { Fuerza: 50, Velocidad: 90, Vida: 80 };
            break;
        case 'michael':
            characterName = "Guile";
            characterImage = "images/Personajes/guile.png";
            characterStats = { Fuerza: 70, Velocidad: 70, Vida: 70 };
            break;
        case 'charlotte':
            characterName = "Juri";
            characterImage = "images/Personajes/juri.png";
            characterStats = { Fuerza: 60, Velocidad: 60, Vida: 90 };
            break;
        case 'benjamin':
            characterName = "Ryu";
            characterImage = "images/Personajes/ryu.png";
            characterStats = { Fuerza: 85, Velocidad: 65, Vida: 55 };
            break;
        case 'sophia':
            characterName = "Zangief";
            characterImage = "images/Personajes/zangief.png";
            characterStats = { Fuerza: 55, Velocidad: 85, Vida: 75 };
            break;
        
    }

    playerImg.src = characterImage;
    playerImg.alt = characterName;
    playerInfo.innerHTML = `
        <h3>${characterName}</h3>
        <p>Fuerza: <div class="stat-bar"><div class="stat-fill fuerza" style="width: ${characterStats.Fuerza}%;"></div></div></p>
        <p>Velocidad: <div class="stat-bar"><div class="stat-fill velocidad" style="width: ${characterStats.Velocidad}%;"></div></div></p>
        <p>Vida: <div class="stat-bar"><div class="stat-fill vida" style="width: ${characterStats.Vida}%;"></div></div></p>
    `;
}

function ready() {
    alert("¡READY!");
}

$(document).ready(function() {
    let currentIndex = 1; // Empieza con la segunda imagen centrada
    const items = $('.carousel-item');
    const itemCount = items.length;

    function updateCarousel() {
        items.removeClass('active');
        $('.carousel').css('transform', `translateX(-${currentIndex * 100}%)`);
        items.eq(currentIndex).addClass('active');
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();

        // Reinicia la posición del carrusel cuando llegue al final
        if (currentIndex === 0) {
            setTimeout(() => {
                $('.carousel').css('transition', 'none');
                $('.carousel').css('transform', 'translateX(-100%)');
                items.eq(0).addClass('active');
                currentIndex = 1;
                setTimeout(() => {
                    $('.carousel').css('transition', 'transform 0.5s ease');
                }, );
            }, 6000);
        }
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    items.eq(currentIndex).addClass('active'); // Marca la imagen inicial como activa

    // Añade el evento de clic a cada imagen
    items.on('click', function() {
        const clickedIndex = items.index(this);
        currentIndex = clickedIndex;
        updateCarousel();
    });

    // Añade los eventos de clic a los botones
    $('.carousel-button.next').on('click', showNextItem);
    $('.carousel-button.prev').on('click', showPrevItem);

    setInterval(showNextItem, 6000);
});

document.addEventListener('scroll', function() {
    const secciones = document.querySelectorAll('.seccion-animada');
    const alturaPantalla = window.innerHeight;
  
    secciones.forEach(function(seccion) {
      const posicion = seccion.getBoundingClientRect().top;
  
      if (posicion < alturaPantalla) {
        seccion.classList.add('visible');
      }
    });
  });


//   selector de mapas 


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