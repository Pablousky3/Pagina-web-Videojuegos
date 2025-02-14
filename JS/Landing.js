$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showNextItem() {
        items.eq(currentIndex).css('transform', 'translateX(-100%)');
        currentIndex = (currentIndex + 1) % itemCount;
        items.eq(currentIndex).css('transform', 'translateX(0)');
    }

    setInterval(showNextItem, 3000);
});