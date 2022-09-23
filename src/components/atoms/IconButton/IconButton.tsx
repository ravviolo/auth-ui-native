import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from 'theme';

export interface Props {
  icon: string;
  color: string;
  testID: string;
  onPress: () => void;
}

export const IconButton = ({ onPress, color, icon, testID }: Props) => {
  return (
    <TouchableHighlight
      style={[styles.btn, { borderColor: color }]}
      testID={testID}
      underlayColor={colors.textWhite}
      onPress={onPress}
    >
      <Text style={[styles.icon, { color }]}>{icon}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    padding: 8,
    width: 50,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
