$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showNextItem() {
        const nextIndex = (currentIndex + 1) % itemCount;
        $('.carousel').css('transform', `translateX(-${nextIndex * 100}%)`);
        currentIndex = nextIndex;
    }

    setInterval(showNextItem, 7000);
});