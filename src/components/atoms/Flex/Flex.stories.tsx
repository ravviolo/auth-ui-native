import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { StoryScreen } from 'storybook/StoryScreen';
import { colors } from 'theme';

import { Flex } from './Flex';

const FlexChildren = Array(10)
  .fill(1)
  .map((_, i) => (
    <View
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      style={{
        width: 10,
        height: 10,
        margin: 10,
        backgroundColor: colors.primary,
      }}
    />
  ));

const flexOptions: ['column', 'row'] = ['column', 'row'];

storiesOf('Flex', module)
  .addDecorator((getStory) => (
    <StoryScreen style={{ alignItems: 'center' }}>{getStory()}</StoryScreen>
  ))
  .add('Column', () => (
    <Flex
      direction={select('direction', flexOptions, 'column')}
      testID={text('testID', 'flex-test-id')}
    >
      {FlexChildren}
    </Flex>
  ))
  .add('Row', () => (
    <Flex
      direction={select('direction', flexOptions, 'row')}
      testID={text('testID', 'flex-test-id')}
    >
      {FlexChildren}
    </Flex>
  ));
