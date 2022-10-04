import { Flex, TextButton } from 'components/atoms';
import { Text } from 'react-native';

import { styles } from './AuthFooter.styles';

export interface Props {
  text: string;
  btnText: string;
  testID: string;
  onPress: () => void;
}

export const AuthFooter = ({ btnText, testID, onPress, text }: Props) => {
  return (
    <Flex direction="row" style={styles.footerContainer} testID={testID}>
      <Text style={styles.footerChild}>{text}</Text>
      <TextButton
        style={[styles.footerChild, styles.footerBtn]}
        testID="btn-footer-test-id"
        title={btnText}
        onPress={onPress}
      />
    </Flex>
  );
};
