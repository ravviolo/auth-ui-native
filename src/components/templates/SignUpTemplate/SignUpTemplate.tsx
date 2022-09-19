import { Flex } from 'components/atoms';
import { AuthFooter, AuthHeader } from 'components/molecules';
import { StatusBar, StyleSheet } from 'react-native';
import { colors } from 'theme';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  onClickFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
  testID: string;
}

export const SignUpTemplate = ({
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onSubmitSignUpForm,
  onClickFooterBtn,
  footerBtnText,
  footerText,
  headerText,
  testID,
}: Props) => {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Flex direction="column" style={styles.container} testID={testID}>
        <AuthHeader testID="auth-header-signup-template-test-id" title={headerText} />

        <AuthFooter
          btnText={footerBtnText}
          testID="auth-footer-signup-template-test-id"
          text={footerText}
          onClick={onClickFooterBtn}
        />
      </Flex>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primaryDark,
    borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
    padding: 50,
  },
});
