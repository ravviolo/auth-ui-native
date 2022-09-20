import { Button, Flex, TextInputHandle } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  testID: string;
}

export const SignUpForm = ({ onSubmitSignUpForm, testID }: Props) => {
  const emailRef = useRef<TextInputHandle | null>(null);
  const passwordRef = useRef<TextInputHandle | null>(null);

  const onSubmit = () => {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (email && password) {
      onSubmitSignUpForm(email, password);
      emailRef.current?.clear();
      passwordRef.current?.clear();
    }
  };
  return (
    <Flex direction="column" style={styles.container} testID={testID}>
      <EmailInput ref={emailRef} testID="email-input-signup-form-test-id" />
      <PasswordInput ref={passwordRef} testID="password-input-signup-form-test-id" />
      <Button testID="btn-submit-signup-test-id" title="Sign Up" onPress={onSubmit} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
