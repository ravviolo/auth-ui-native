import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface Props {
  children: React.ReactNode;
  direction: 'column' | 'row';
  testID: string;
  style?: StyleProp<ViewStyle>;
}

export const Flex = ({ children, direction, style, testID }: Props) => {
  return (
    <View style={[styles[direction], style]} testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
