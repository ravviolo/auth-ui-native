import { StyleSheet, Text } from 'react-native';
import { colors } from 'theme';

interface Props {
  title: string;
  testID: string;
}

export const Heading = ({ title, testID }: Props) => {
  return (
    <Text style={styles.heading} testID={testID}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
