import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen } from 'storybook/StoryScreen';

import { InputField } from './InputField';

storiesOf('InputField', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Text', () => (
    <InputField
      secureTextEntry={boolean('secureTextEntry', false)}
      testID={text('testID', 'input-field-test-id')}
    />
  ))
  .add('Password', () => (
    <InputField
      secureTextEntry={boolean('secureTextEntry', true)}
      testID={text('testID', 'input-field-test-id')}
    />
  ));
