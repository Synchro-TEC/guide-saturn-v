import Home from './pages/Home';
import Colors from './pages/Colors';
import Grid from './pages/Grid';
import AboutButtonsPage from './pages/buttons/about';
import SizeButtonsPage from './pages/buttons/sizes';
import Spacing from './pages/Spacing';
import FormLayouts from './pages/forms/Layouts';
import Inputs from './pages/forms/Inputs';
import BreadCrumbs from './pages/components/breadcrumbs';
import Loaders from './pages/components/loaders';
import Tags from './pages/components/tags';
import MessageBox from './pages/components/messageBox';

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
    path: '/buttons/sobre',
    component: AboutButtonsPage,
  },
  {
    path: '/buttons/tamanhos',
    component: SizeButtonsPage,
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
  {
    path: '/componentes/messagebox',
    component: MessageBox,
  },
];

export default routes;
