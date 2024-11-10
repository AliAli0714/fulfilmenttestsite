// Получаем элементы изображения и фона
const img = document.querySelector('.about img');
const parallaxBg = document.querySelector('.mouse-parallax-bg');

// Функция для обновления позиций на основе движения мыши
function parallaxEffect(event) {
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Вычисляем координаты курсора относительно центра экрана
    const mouseX = (event.clientX / windowWidth) - 0.5;
    const mouseY = (event.clientY / windowHeight) - 0.5;

    // Настройки скорости параллакса
    const imgSpeed = 20;  // Скорость для изображения
    const bgSpeed = 30;   // Скорость для фона

    // Применяем смещение для каждого элемента
    img.style.transform = `translate(${mouseX * imgSpeed}px, ${mouseY * imgSpeed}px)`;
    parallaxBg.style.transform = `translate(${mouseX * bgSpeed}px, ${mouseY * bgSpeed}px)`;
}

// Добавляем обработчик событий на движение мыши
document.addEventListener('mousemove', parallaxEffect);


// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      // Настройки и параметры (необязательно)
      offset: 200, // Смещение (пиксели)
      delay: 10, // Задержка анимации (милисекунды)
      duration: 1200, // Продолжительность анимации (в миллисекундах)
      easing: 'ease', // Тип анимации
      once: true, // Выполнить анимацию только один раз
    });
  });

  
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.head__nav').classList.toggle('open');
})