import { Flex, TextButton } from 'components/atoms';
import { StyleSheet, Text } from 'react-native';
import { colors } from 'theme';

interface Props {
  text: string;
  btnText: string;
  testID: string;
  onClick: () => void;
}

export const AuthFooter = ({ btnText, testID, onClick, text }: Props) => {
  return (
    <Flex direction="row" style={styles.footerContainer} testID={testID}>
      <Text style={styles.footerChild}>{text}</Text>
      <TextButton
        style={[styles.footerChild, styles.footerBtn]}
        testID={testID}
        title={btnText}
        onPress={onClick}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  footerBtn: {
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  footerChild: {
    color: colors.textLight,
    marginHorizontal: 2,
  },
  footerContainer: {
    justifyContent: 'center',
  },
});
