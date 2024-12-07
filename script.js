document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const footerTrigger = document.getElementById("footer-trigger");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("visible"); // Показати футер
        } else {
          footer.classList.remove("visible"); // Сховати футер, якщо він більше не видимий
        }
      });
    }, {
      threshold: 1.0 // Тільки коли весь footer-trigger буде в полі зору
    });
  
    observer.observe(footerTrigger);
  });








  const pultOpenButton = document.getElementById('PultOpen');
  const pultBox = document.getElementById('Pult');
  
  // Додаємо слухач подій для кнопки
  pultOpenButton.addEventListener('click', () => {
      pultBox.classList.toggle('show'); // Додаємо/знімаємо клас "show"
  });
  




  const button = document.getElementById('PultOpen');
  const image = document.getElementById('buttonImage');

  button.addEventListener('click', () => {
      const currentSrc = image.src;
      const newSrc = './MediaFile/doun-svgrepo-com.png'; // Шлях до іншого зображення

      image.src = currentSrc.includes('up-svgrepo-com.png') ? newSrc : './MediaFile/up-svgrepo-com.png';
  });