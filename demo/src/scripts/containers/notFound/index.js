import Loading from '../../components/common/loading';
import Loadable from 'react-loadable';

const NotFoundApp = Loadable({
  loader: () => import('./app'),
  loading: Loading,
});

export default NotFoundApp;