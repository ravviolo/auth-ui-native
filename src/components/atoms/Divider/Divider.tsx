import { Text, View } from 'react-native';

import { styles } from './Divider.styles';

export interface Props {
  testID: string;
  label?: string;
}

export const Divider = ({ label, testID }: Props) => {
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.line} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};
