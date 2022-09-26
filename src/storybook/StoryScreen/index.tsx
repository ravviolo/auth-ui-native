import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'theme';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
}

export const StoryScreen = ({ children, center, style }: Props) => {
  return (
    <SafeAreaView style={[styles.main, center && styles.center, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  main: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
