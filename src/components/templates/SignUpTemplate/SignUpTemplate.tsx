import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';
import { StyleSheet, View, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
      <KeyboardAwareScrollView contentContainerStyle={styles.container} testID={testID}>
        <AuthHeader testID="auth-header-signup-template-test-id" title={headerText} />
        <View style={styles.formContainer}>
          <SignUpForm testID="signup-form-test-id" onSubmitSignUpForm={onSubmitSignUpForm} />
        </View>
        <Divider label="OR" testID="divider-signup-test-id" />
        <View style={styles.socialsContainer}>
          <AuthSocials
            testID="auth-socials-signup-template-test-id"
            onPressFacebook={onPressFacebook}
            onPressGoogle={onPressGoogle}
            onPressLinkedIn={onPressLinkedIn}
          />
        </View>
        <View style={styles.footerContainer}>
          <AuthFooter
            btnText={footerBtnText}
            testID="auth-footer-signup-template-test-id"
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
    height: 220,
    marginVertical: 60,
  },
  socialsContainer: {
    marginVertical: 60,
  },
});
