import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { AuthFooter } from './AuthFooter';

storiesOf('AuthFooter', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <AuthFooter
      btnText={text('btnText', 'Click me!')}
      testID={text('testID', 'auth-footer-test-id')}
      text={text('text', 'This is footer with a button.')}
      onPress={action('onPressFooterBtn')}
    />
  ));
