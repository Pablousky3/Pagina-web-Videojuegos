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