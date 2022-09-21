import { Heading } from 'components/atoms';
import { View } from 'react-native';

interface Props {
  title: string;
  testID: string;
}

export const AuthHeader = ({ title, testID }: Props) => {
  return (
    <View testID={testID}>
      <Heading testID="auth-heading-test-id" title={title} />
    </View>
  );
};
