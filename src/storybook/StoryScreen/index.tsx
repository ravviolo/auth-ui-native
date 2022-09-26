import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'theme';

interface Props {
  children: React.ReactNode;
}

export const StoryScreen = ({ children }: Props) => {
  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
});
