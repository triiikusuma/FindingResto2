import Beranda from '../views/pages/beranda';
import ResepDetail from '../views/pages/resep-detail';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/detail/:id': ResepDetail,
};

export default routes;
