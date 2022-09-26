import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { Divider } from './Divider';

storiesOf('Divider', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('With Label', () => (
    <Divider label={text('label', 'Label')} testID={text('testID', 'divider-test-id')} />
  ))
  .add('No Label', () => <Divider testID={text('testID', 'divider-test-id')} />);
