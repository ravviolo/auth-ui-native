import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'theme';

interface Props {
  testID: string;
  label: string;
}

export const InputLabel = ({ label, testID }: Props) => {
  return (
    <View>
      <Text style={styles.label} testID={testID}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    marginBottom: 3,
  },
});
