import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';
import { StyleSheet, View, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

      <KeyboardAwareScrollView contentContainerStyle={styles.container} testID={testID}>
        <AuthHeader testID="auth-header-login-template-test-id" title={headerText} />
        <View style={styles.formContainer}>
          <LoginForm
            testID="login-form-test-id"
            onPressResetPassword={onPressResetPassword}
            onSubmitLoginForm={onSubmitLoginForm}
          />
        </View>
        <Divider label="OR" testID="divider-login-test-id" />
        <View style={styles.socialsContainer}>
          <AuthSocials
            testID="auth-socials-login-template-test-id"
            onPressFacebook={onPressFacebook}
            onPressGoogle={onPressGoogle}
            onPressLinkedIn={onPressLinkedIn}
          />
        </View>
        <View style={styles.footerContainer}>
          <AuthFooter
            btnText={footerBtnText}
            testID="auth-footer-login-template-test-id"
            text={footerText}
            onPress={onPressFooterBtn}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    minHeight: '100%',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  footerContainer: {
    flex: 1,
  },
  formContainer: {
    height: 280,
    marginVertical: 60,
  },
  socialsContainer: {
    marginVertical: 60,
  },
});
