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
import { useEffect, useRef } from 'react';

import { styles } from './LoginForm.styles';

export interface Props {
  onSubmitLoginForm: (email: string, password: string, rememberPassword: boolean) => void;
  onPressResetPassword: () => void;
}

export const LoginForm = ({ onSubmitLoginForm, onPressResetPassword }: Props) => {
  const emailRef = useRef<TextInputHandle | null>(null);
  const passwordRef = useRef<TextInputHandle | null>(null);
  const rememberPasswordRef = useRef<CheckboxHandle | null>(null);

  useEffect(() => {
    emailRef.current?.setFocus();
  }, []);
  // todo: console.log('login render');

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
    <Flex direction="column" style={styles.container}>
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
