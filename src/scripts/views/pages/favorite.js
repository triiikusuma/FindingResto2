import FavoriteRestoIdb from '../../data/database';
import { restoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 tabindex="0" class="content__heading">Your Favorite Resto</h2>
        <div id="restos" class="restos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    movies.forEach((resto) => {
      restosContainer.innerHTML += restoItemTemplate(resto);
    });
  },
};

export default Favorite;
