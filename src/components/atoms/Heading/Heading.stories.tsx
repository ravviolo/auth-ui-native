import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { Heading } from './Heading';

storiesOf('Heading', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <Heading
      testID={text('testID', 'heading-test-id')}
      title={text('title', 'This is a heading')}
    />
  ));
