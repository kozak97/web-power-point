
document.addEventListener('keydown', function (event) {
    let elementMove = document.title;
    let elementMoveSelector = document.querySelector(`.${elementMove}`);
    
    if (event.altKey && event.key === 'm') {
        function moveObjectTo(destinationX, destinationY, object) {
            // Отримуємо поточні координати об'єкта
            let currentX = object.offsetLeft;
            let currentY = object.offsetTop;
          
            // Визначаємо відстань, яку потрібно пройти
            let distanceX = destinationX - currentX;
            let distanceY = destinationY - currentY;
          
            // Задаємо кількість кроків і час, протягом якого триватиме рух
            let steps = 50; // Кількість кроків
            let duration = 1000; // Час у мілісекундах
          
            // Розраховуємо величину кроку для кожного напрямку
            let stepX = distanceX / steps;
            let stepY = distanceY / steps;
          
            // Запускаємо анімацію руху
            let stepCount = 0;
            function animate() {
              currentX += stepX;
              currentY += stepY;
          
              object.style.left = currentX + 'px';
              object.style.top = currentY + 'px';
          
              stepCount++;
          
              if (stepCount < steps) {
                requestAnimationFrame(animate);
              }
            }
          
            animate();
          }
          
          // Приклад використання
          moveObjectTo(500, 200, elementMoveSelector); // Замініть 300 і 200 на координати вашого заданого місця
          



    }
});



