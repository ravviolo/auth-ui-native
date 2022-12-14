import { useFocusEffect } from '@react-navigation/native';
import { Button, Flex, TextInputHandle } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';
import { useRef } from 'react';

import { styles } from './SignUpForm.styles';

export interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
}

export const SignUpForm = ({ onSubmitSignUpForm }: Props) => {
  const emailRef = useRef<TextInputHandle | null>(null);
  const passwordRef = useRef<TextInputHandle | null>(null);

  useFocusEffect(() => {
    const timeoutID = setTimeout(() => {
      emailRef.current?.focus();
    }, 0);

    return () => clearTimeout(timeoutID);
  });

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
    <Flex direction="column" style={styles.container}>
      <EmailInput ref={emailRef} testID="email-input-signup-form-test-id" />
      <PasswordInput ref={passwordRef} testID="password-input-signup-form-test-id" />
      <Button testID="btn-submit-signup-test-id" title="Sign Up" onPress={onSubmit} />
    </Flex>
  );
};
