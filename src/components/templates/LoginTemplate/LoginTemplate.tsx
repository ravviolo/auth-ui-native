import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { colors } from 'theme';

import { styles } from './LoginTemplate.styles';

export interface Props {
  onSubmitLoginForm: (email: string, password: string, rememberPassword: boolean) => void;
  onPressResetPassword: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressLinkedIn: () => void;
  onPressFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
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
}: Props) => {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.container}>
          <AuthHeader testID="auth-header-login-template-test-id" title={headerText} />
          <View style={styles.formContainer}>
            <LoginForm
              onPressResetPassword={onPressResetPassword}
              onSubmitLoginForm={onSubmitLoginForm}
            />
          </View>
          <Divider label="OR" testID="divider-login-test-id" />
          <View style={styles.socialsContainer}>
            <AuthSocials
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
