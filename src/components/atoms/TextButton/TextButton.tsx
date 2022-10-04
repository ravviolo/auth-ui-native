import { Pressable, StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './TextButton.styles';

export interface Props {
  title: string;
  testID: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
}

export const TextButton = ({ onPress, title, testID, style }: Props) => {
  return (
    <Pressable
      hitSlop={20}
      style={({ pressed }) => pressed && styles.pressed}
      testID={testID}
      onPress={onPress}
    >
      <Text style={style}>{title}</Text>
    </Pressable>
  );
};
