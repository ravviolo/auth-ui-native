import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { AuthHeader } from './AuthHeader';

storiesOf('AuthHeader', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <AuthHeader
      testID={text('testID', 'auth-header-test-id')}
      title={text('title', 'This is main header.')}
    />
  ));
