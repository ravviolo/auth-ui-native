import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { Button } from './Button';

storiesOf('Button', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <Button
      testID={text('testID', 'test-id')}
      title={text('title', 'Button')}
      onPress={action('onPress')}
    />
  ));
