import DataSource from '../../data/data-source';
import { restoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="jumbotron" aria-label="ini adalah jumbotron">
        <div class="jumbotron__inner">
          <h1 tabindex="0" class="jumbotron__title">Makanan Lokal, Kualitas Global </h1>
          </p>
        </div>
      </div>
      
      <div class="content">
        <h2 tabindex="0" class="content__heading">Explore Restaurant</h2>
        <div id="restos" class="restos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await DataSource.homeResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += restoItemTemplate(resto);
    });
  },
};

export default Home;
