import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { SignUpTemplate } from './SignUpTemplate';

storiesOf('SignUpTemplate', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <SignUpTemplate
      footerBtnText={text('footerBtnText', 'Link')}
      footerText={text('footerText', 'Sign up footer text.')}
      headerText={text('headerText', 'Sign up header')}
      testID={text('testID', 'signup-template-test-id')}
      onPressFacebook={action('onPressFacebook')}
      onPressFooterBtn={action('onPressFooterBtn')}
      onPressGoogle={action('onPressGoogle')}
      onPressLinkedIn={action('onPressLinkedIn')}
      onSubmitSignUpForm={action('onSubmitSignUpForm')}
    />
  ));
