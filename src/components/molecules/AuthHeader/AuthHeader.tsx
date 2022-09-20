import { Heading } from 'components/atoms';
import { StyleSheet, View } from 'react-native';

interface Props {
  title: string;
  testID: string;
}

export const AuthHeader = ({ title, testID }: Props) => {
  return (
    <View style={styles.container} testID={testID}>
      <Heading testID="auth-heading-test-id" title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
