import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { EmailInput } from './EmailInput';

storiesOf('EmailInput', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => <EmailInput testID={text('testID', 'email-input-test-id')} />);
