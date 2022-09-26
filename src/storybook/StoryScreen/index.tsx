import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'theme';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const StoryScreen = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.main, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});
