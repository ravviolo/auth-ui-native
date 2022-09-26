import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => <Checkbox testID={text('testID', 'test-id')} />);
