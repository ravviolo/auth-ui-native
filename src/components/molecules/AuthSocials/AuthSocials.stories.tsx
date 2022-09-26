import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { AuthSocials } from './AuthSocials';

storiesOf('AuthSocials', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <AuthSocials
      testID={text('testID', 'auth-socials-test-id')}
      onPressFacebook={action('onPressFacebook')}
      onPressGoogle={action('onPressGoogle')}
      onPressLinkedIn={action('onPressLinkedIn')}
    />
  ));
