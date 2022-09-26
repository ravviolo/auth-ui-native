import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { SignUpForm } from './SignUpForm';

storiesOf('SignUpForm', module)
  .addDecorator((getStory) => (
    <StoryScreen>
      <View style={{ flex: 0.23 }}>{getStory()}</View>
    </StoryScreen>
  ))
  .add('Default', () => (
    <SignUpForm
      testID={text('testID', 'signup-form-test-id')}
      onSubmitSignUpForm={action('onSubmitSignUpForm')}
    />
  ));
