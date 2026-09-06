const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let current = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let autoScrollInterval;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextItem() {
        let nextIndex = (currentIndex + 1) % items.length;
        showItem(nextIndex);
    }

    function prevItem() {
        let prevIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(prevIndex);
    }

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    // Auto-scroll every 4 seconds
    autoScrollInterval = setInterval(nextItem, 6000);

    // Pause auto-scroll on mouse enter, resume on mouse leave
    track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    track.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(nextItem, 6000);
    });

    // Initialize
    showItem(currentIndex);
});