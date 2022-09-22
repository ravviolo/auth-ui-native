import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from 'theme';

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

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 5,
    padding: 15,
  },
  btnText: {
    color: colors.textWhite,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
