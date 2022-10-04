import ExpoCheckbox from 'expo-checkbox';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { colors } from 'theme';

import { styles } from './Checkbox.styles';

export interface CheckboxHandle {
  getValue: () => boolean;
  clear: () => void;
}

export interface Props {
  testID: string;
}

export const Checkbox = forwardRef<CheckboxHandle, Props>(({ testID }, ref) => {
  const [isChecked, setIsChecked] = useState(false);

  useImperativeHandle(ref, () => ({
    getValue: () => isChecked,
    clear: () => {
      setIsChecked(false);
    },
  }));

  return (
    <ExpoCheckbox
      color={isChecked ? colors.primary : colors.textLight}
      style={styles.checkbox}
      testID={testID}
      value={isChecked}
      onValueChange={setIsChecked}
    />
  );
});
