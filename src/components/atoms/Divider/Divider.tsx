import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'theme';

export interface Props {
  testID: string;
  label?: string;
}

export const Divider = ({ label, testID }: Props) => {
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.line} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    backgroundColor: colors.background,
    borderColor: colors.textLight,
    borderRadius: 5,
    borderWidth: 1,
    color: colors.textLight,
    padding: 4,
    position: 'absolute',
    textAlign: 'center',
    zIndex: 2,
  },
  line: {
    alignSelf: 'stretch',
    backgroundColor: colors.textLight,
    height: 1,
  },
});
