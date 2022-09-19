import { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from 'theme';

interface Props {
  testID: string;
  secureTextEntry?: boolean;
}

export interface TextInputHandle {
  getValue: () => string;
  clear: () => void;
}

export const InputField = forwardRef<TextInputHandle, Props>(
  ({ secureTextEntry = false, testID }, ref) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const toggleFocus = () => setIsFocused((focusState) => !focusState);

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      clear: () => {
        setValue('');
      },
    }));

    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          {
            borderColor: isFocused ? colors.text : colors.textLight,
          },
        ]}
        testID={testID}
        value={value}
        onBlur={toggleFocus}
        onChangeText={setValue}
        onFocus={toggleFocus}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    borderColor: colors.textLight,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
});
