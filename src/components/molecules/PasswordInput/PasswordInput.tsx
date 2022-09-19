import { InputField, InputLabel, TextInputHandle } from 'components/atoms';
import { forwardRef } from 'react';
import { View } from 'react-native';

interface Props {
  testID: string;
}

export const PasswordInput = forwardRef<TextInputHandle, Props>(({ testID }, ref) => {
  return (
    <View testID={testID}>
      <InputLabel label="Password" testID="input-label-password-test-id" />
      <InputField ref={ref} testID="input-field-password-test-id" secureTextEntry />
    </View>
  );
});
