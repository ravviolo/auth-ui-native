import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { PasswordInput } from './PasswordInput';

storiesOf('PasswordInput', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => <PasswordInput testID={text('testID', 'password-input-test-id')} />);
