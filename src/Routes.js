import Home from './pages/Home';
import Colors from './pages/Colors';
import Grid from './pages/Grid';
import ButtonsPage from './pages/Buttons';
import Spacing from './pages/Spacing';
import FormLayouts from './pages/forms/Layouts';
import Inputs from './pages/forms/Inputs';
import BreadCrumbs from './pages/components/breadcrumbs';

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
];

export default routes;
