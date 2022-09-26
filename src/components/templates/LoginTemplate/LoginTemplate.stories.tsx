import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { LoginTemplate } from './LoginTemplate';

storiesOf('LoginTemplate', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <LoginTemplate
      footerBtnText={text('footerBtnText', 'Link')}
      footerText={text('footerText', 'Login footer text.')}
      headerText={text('headerText', 'Login header')}
      testID={text('testID', 'login-template-test-id')}
      onPressFacebook={action('onPressFacebook')}
      onPressFooterBtn={action('onPressFooterBtn')}
      onPressGoogle={action('onPressGoogle')}
      onPressLinkedIn={action('onPressLinkedIn')}
      onPressResetPassword={action('onPressResetPassword')}
      onSubmitLoginForm={action('onSubmitLoginForm')}
    />
  ));
