import { Text, TouchableHighlight } from 'react-native';
import { colors } from 'theme';

import { styles } from './Button.styles';

export interface Props {
  title: string;
  testID: string;
  onPress: () => void;
}

export const Button = ({ onPress, testID, title }: Props) => {
  return (
    <TouchableHighlight
      style={styles.btnContainer}
      testID={testID}
      underlayColor={colors.primaryDark}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableHighlight>
  );
};
