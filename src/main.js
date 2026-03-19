import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');

hideLoader();

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

   const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === "") {
    iziToast.warning({
      message: 'Будь ласка, введіть слово для пошуку!',
      position: 'topRight'
    });
    return;
  }

  
  clearGallery();
 
  showLoader();

 
  getImagesByQuery(query)
    .then(data => {
          if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return;
      }

      // 4. Якщо все добре, малюємо галерею
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Сталася помилка при завантаженні зображень. Спробуйте пізніше.',
        position: 'topRight'
      });
    })
    .finally(() => {
      // 5. Ховаємо лоадер у будь-якому випадку (успіх чи помилка)
      hideLoader();
      // Очищуємо форму
      searchForm.reset();
    });
});