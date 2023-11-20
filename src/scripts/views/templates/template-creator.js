/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const restoDetailTemplate = (resto) => {
  let categories = '';
  let foods = '';
  let drinks = '';
  resto.categories.forEach((category) => {
    categories += ` ${category.name};`;
  });
  resto.menus.foods.forEach((food) => {
    foods += `<li>${food.name}</li>`;
  });
  resto.menus.drinks.forEach((drink) => {
    drinks += `<li>${drink.name}</li>`;
  });

  const htmlStr = `
    <h2 tabindex="0" class="resto__title">${resto.name}</h2>
    <img  tabindex="0" class="resto__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    <div class="content__detail">
      <div class="resto__info">
          <h3 tabindex="0">Information</h3>
          <h4 tabindex="0">Address</h4>
          <p tabindex="0">${resto.address}, ${resto.city}</p>
          <h4 tabindex="0">Rating</h4>
          <p tabindex="0">${resto.rating}</p>
          <h4 tabindex="0">Categories</h4>
          <p tabindex="0">${categories}</p>
      </div>
      <div class="resto__overview">
          <h3 tabindex="0">Description</h3>
          <p tabindex="0">${resto.description}</p>
      </div>
      <div class="resto__info">
        <h4 tabindex="0">Foods</h4>
        <div class="resto__info_menu">
          <ul>
            ${foods}
          </ul>
        </div>
      </div>
      <div class="resto__info">
        <h4 tabindex="0">Drinks</h4>
        <div class="resto__info_menu">
          <ul>
            ${drinks}
          </ul>
        </div>
      </div>
      <div class="costumer-riview">
        <span tabindex="0">Costumer Riviews :</span>
        <div class="costumer">
            ${resto.customerReviews.reduce((show, value) => show.concat(`
                <p tabindex="0">${value.name} <span tabindex="0">${value.date}</span></p>
                <p class="riview" tabindex="0">${value.review}</p>
            `), '')}
        </div>
      </div>
    </div>
    `;
  return htmlStr;
};

const restoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img tabindex="0" class="resto-item__header__poster lazyload" crossorigin="anonymous" alt="${resto.name}"
            data-src="${
  resto.pictureId
    ? CONFIG.BASE_IMAGE_URL + resto.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
        <div class="resto-item__header__rating">
            <p tabindex="0">⭐️<span class="resto-item__header__rating__score">${
  resto.rating
}</span></p tabindex="0">
        </div>
        <div class="resto-item__header__city">
            <p><span class="resto-item__header__city_str">${
  resto.city
}</span></p tabindex="0">
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="title-detail" tabindex="0"><a tabindex="0" href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemTemplate,
  restoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
