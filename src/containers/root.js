import {Provider} from 'react-redux';
import {store} from 'state';
import AppRoutes from 'routes';
import {BrowserRouter} from 'react-router-dom';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

export default Root;
