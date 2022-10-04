import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { colors } from 'theme';

import { styles } from './InputField.styles';

export interface Props {
  testID: string;
  secureTextEntry?: boolean;
}

export interface TextInputHandle {
  getValue: () => string;
  clear: () => void;
  setFocus: () => void;
}

export const InputField = forwardRef<TextInputHandle, Props>(
  ({ secureTextEntry = false, testID }, ref) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputFocusRef = useRef<TextInput | null>(null);

    const toggleFocus = () => setIsFocused((focusState) => !focusState);

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      clear: () => {
        setValue('');
      },
      setFocus: () => inputFocusRef.current?.focus(),
    }));

    return (
      <TextInput
        ref={inputFocusRef}
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
