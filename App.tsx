import { Navigator } from 'navigator';
import { Provider } from 'react-redux';
import { store } from 'store';

import StorybookUI from './storybook';

const LOAD_STORYBOOK = true;

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default LOAD_STORYBOOK ? StorybookUI : App;
