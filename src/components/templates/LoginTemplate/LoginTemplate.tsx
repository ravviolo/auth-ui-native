import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';
import { StatusBar, StyleSheet, View } from 'react-native';
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
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        testID={testID}
      >
        <View style={styles.content}>
          <AuthHeader testID="auth-header-login-template-test-id" title={headerText} />
          <LoginForm
            testID="login-form-test-id"
            onPressResetPassword={onPressResetPassword}
            onSubmitLoginForm={onSubmitLoginForm}
          />

          <Divider label="OR" testID="divider-login-test-id" />
          <AuthSocials
            testID="auth-socials-login-template-test-id"
            onPressFacebook={onPressFacebook}
            onPressGoogle={onPressGoogle}
            onPressLinkedIn={onPressLinkedIn}
          />
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
    justifyContent: 'space-between',
    minHeight: '100%',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  content: {
    flex: 0.7,
  },
});
