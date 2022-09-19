import { InputField, InputLabel, TextInputHandle } from 'components/atoms';
import { forwardRef } from 'react';
import { View } from 'react-native';

interface Props {
  testID: string;
}

export const EmailInput = forwardRef<TextInputHandle, Props>(({ testID }, ref) => {
  return (
    <View testID={testID}>
      <InputLabel label="Email" testID="input-label-email-test-id" />
      <InputField ref={ref} testID="input-field-email-test-id" />
    </View>
  );
});
