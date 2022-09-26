import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { LoginForm } from './LoginForm';

storiesOf('LoginForm', module)
  .addDecorator((getStory) => (
    <StoryScreen>
      <View style={{ flex: 0.3 }}>{getStory()}</View>
    </StoryScreen>
  ))
  .add('Default', () => (
    <LoginForm
      testID={text('testID', 'login-form-test-id')}
      onPressResetPassword={action('onPressResetPassword')}
      onSubmitLoginForm={action('onSubmitLoginForm')}
    />
  ));
