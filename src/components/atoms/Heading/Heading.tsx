import { Text } from 'react-native';

import { styles } from './Heading.styles';

export interface Props {
  title: string;
  testID: string;
}

export const Heading = ({ title, testID }: Props) => {
  return (
    <Text style={styles.heading} testID={testID}>
      {title}
    </Text>
  );
};
