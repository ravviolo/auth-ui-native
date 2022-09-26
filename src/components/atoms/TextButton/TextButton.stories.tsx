import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { TextButton } from './TextButton';

storiesOf('TextButton', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <TextButton
      testID={text('testID', 'text-btn-test-id')}
      title={text('title', 'Button')}
      onPress={action('onPress')}
    />
  ));
