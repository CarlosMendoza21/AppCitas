let currentIndex = 0;

    function moveCarousel(direction) {
      const items = document.querySelectorAll('.carousel-item');
      const totalItems = items.length;
      currentIndex = (currentIndex + direction + totalItems) % totalItems;
      const offset = -currentIndex * 100;
      items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
      });
    }