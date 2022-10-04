import { Text } from 'react-native';

import { styles } from './InputLabel.styles';

export interface Props {
  testID: string;
  label: string;
}

export const InputLabel = ({ label, testID }: Props) => {
  return (
    <Text style={styles.label} testID={testID}>
      {label}
    </Text>
  );
};
