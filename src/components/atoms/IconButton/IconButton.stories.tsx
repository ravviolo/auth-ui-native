import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { IconButton } from './IconButton';

storiesOf('IconButton', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <IconButton
      color={color('color', '#4267B2')}
      icon={text('icon', 'f')}
      testID={text('testID', 'icon-btn-test-id')}
      onPress={action('onPress')}
    />
  ));
