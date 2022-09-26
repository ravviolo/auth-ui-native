import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, getStorybookUI } from '@storybook/react-native';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/storybook/stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  port: '7007',
  host: '192.168.0.101',
});


export default StorybookUIRoot;
