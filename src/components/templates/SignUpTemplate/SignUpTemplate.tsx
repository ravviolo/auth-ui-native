import { Divider, Flex } from 'components/atoms';
import { AuthFooter, AuthHeader } from 'components/molecules';
import { SignUpForm } from 'components/organisms';
import { StatusBar, StyleSheet } from 'react-native';
import { colors } from 'theme';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressLinkedIn: () => void;
  onPressFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
  testID: string;
}

export const SignUpTemplate = ({
  onPressFacebook,
  onPressGoogle,
  onPressLinkedIn,
  onSubmitSignUpForm,
  onPressFooterBtn,
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
        <SignUpForm testID="signup-form-test-id" onSubmitSignUpForm={onSubmitSignUpForm} />
        <Divider label="OR" testID="divider-signup-test-id" />

        <AuthFooter
          btnText={footerBtnText}
          testID="auth-footer-signup-template-test-id"
          text={footerText}
          onPress={onPressFooterBtn}
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
    justifyContent: 'space-evenly',
    padding: 50,
  },
});
