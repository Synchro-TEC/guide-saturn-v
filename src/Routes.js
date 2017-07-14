import Home from './pages/Home';
import Colors from './pages/Colors';
import Grid from './pages/Grid';
import ButtonsPage from './pages/Buttons';
import Spacing from './pages/Spacing';
import FormLayouts from './pages/forms/Layouts';
import Inputs from './pages/forms/Inputs';
import BreadCrumbs from './pages/components/breadcrumbs';
import Loaders from './pages/components/loaders';
import Tags from './pages/components/tags';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/colors',
    component: Colors,
  },
  {
    path: '/grid',
    component: Grid,
  },
  {
    path: '/buttons',
    component: ButtonsPage,
  },
  {
    path: '/espacamentos',
    component: Spacing,
  },
  {
    path: '/formularios/inputs',
    component: Inputs,
  },
  {
    path: '/formularios/layouts',
    component: FormLayouts,
  },
  {
    path: '/componentes/breadcrumbs',
    component: BreadCrumbs,
  },
  {
    path: '/componentes/loaders',
    component: Loaders,
  },
  {
    path: '/componentes/tags',
    component: Tags,
  },
];

export default routes;
