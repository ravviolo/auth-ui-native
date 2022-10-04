import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { colors } from 'theme';

import { styles } from './SignUpTemplate.styles';

export interface Props {
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
      <KeyboardAvoidingView style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.container} testID={testID}>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
