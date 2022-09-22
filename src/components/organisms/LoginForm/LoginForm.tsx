import {
  Button,
  Checkbox,
  CheckboxHandle,
  Flex,
  InputLabel,
  TextButton,
  TextInputHandle,
} from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export interface Props {
  testID: string;
  onSubmitLoginForm: (email: string, password: string, rememberPassword: boolean) => void;
  onPressResetPassword: () => void;
}

export const LoginForm = ({ onSubmitLoginForm, onPressResetPassword, testID }: Props) => {
  const emailRef = useRef<TextInputHandle | null>(null);
  const passwordRef = useRef<TextInputHandle | null>(null);
  const rememberPasswordRef = useRef<CheckboxHandle | null>(null);

  const onSubmit = () => {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();
    const rememberPassword = !!rememberPasswordRef.current?.getValue();

    if (email && password) {
      onSubmitLoginForm(email, password, rememberPassword);
      emailRef.current?.clear();
      passwordRef.current?.clear();
      rememberPasswordRef.current?.clear();
    }
  };
  return (
    <Flex direction="column" style={styles.container} testID={testID}>
      <EmailInput ref={emailRef} testID="email-input-login-form-test-id" />
      <PasswordInput ref={passwordRef} testID="password-input-login-form-test-id" />
      <Flex
        direction="row"
        style={styles.checkboxContainer}
        testID="checkbox-container-login-form-test-id"
      >
        <Checkbox ref={rememberPasswordRef} testID="remember-password-checkbox-test-id" />
        <InputLabel label="Remember me?" testID="input-label-remember-password-checkbox-test-id" />
      </Flex>
      <Button testID="btn-submit-login-test-id" title="Login" onPress={onSubmit} />
      <TextButton
        style={styles.secondaryButton}
        testID="btn-reset-password-test-id"
        title="Forgot Password?"
        onPress={onPressResetPassword}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'space-between',
    width: 130,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  secondaryButton: {
    alignSelf: 'flex-end',
    color: colors.textLight,
  },
});
