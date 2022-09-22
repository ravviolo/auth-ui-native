import { StyleSheet, Text } from 'react-native';
import { colors } from 'theme';

export interface Props {
  testID: string;
  label: string;
}

export const InputLabel = ({ label, testID }: Props) => {
  return (
    <Text style={styles.label} testID={testID}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    marginBottom: 3,
  },
});
