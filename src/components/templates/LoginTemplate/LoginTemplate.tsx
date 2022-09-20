import { Divider, Flex } from 'components/atoms';
import { AuthFooter, AuthHeader } from 'components/molecules';
import { LoginForm } from 'components/organisms';
import { StatusBar, StyleSheet } from 'react-native';
import { colors } from 'theme';

interface Props {
  onSubmitLoginForm: (email: string, password: string, rememberPassword: boolean) => void;
  onPressResetPassword: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressLinkedIn: () => void;
  onPressFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
  testID: string;
}

export const LoginTemplate = ({
  onPressFacebook,
  onPressGoogle,
  onPressLinkedIn,
  onSubmitLoginForm,
  onPressResetPassword,
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
        <AuthHeader testID="auth-header-login-template-test-id" title={headerText} />

        <LoginForm
          testID="login-form-test-id"
          onPressResetPassword={onPressResetPassword}
          onSubmitLoginForm={onSubmitLoginForm}
        />

        <Divider label="OR" testID="divider-login-test-id" />
        <AuthFooter
          btnText={footerBtnText}
          testID="auth-footer-login-template-test-id"
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
    justifyContent: 'space-between',
    padding: 50,
  },
});
