import Constants from 'expo-constants';
import { Navigator } from 'navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store';

import StorybookUI from './storybook';
import { styles } from './storybook/Storybook.styles';

const LOAD_STORYBOOK = Constants.manifest?.extra?.loadStorybook === 'true';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

const Storybook = () => {
  return (
    <SafeAreaView style={styles.storybookContainer}>
      <StorybookUI />
    </SafeAreaView>
  );
};

export default LOAD_STORYBOOK ? Storybook : App;
