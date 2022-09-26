import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { InputLabel } from './InputLabel';

storiesOf('InputLabel', module)
  .addDecorator((getStory) => <StoryScreen center>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <InputLabel label={text('label', 'Label')} testID={text('testID', 'input-label-test-id')} />
  ));
