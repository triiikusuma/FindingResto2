import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { restoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DataSource.detailResto(url.id);
    console.log(resto);
    const movieContainer = document.querySelector('#resto');
    movieContainer.innerHTML = restoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        categories: resto.categories,
        menus: resto.menus,
        rating: resto.rating,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default Detail;
